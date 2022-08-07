import {Injectable} from '@nestjs/common';
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {UserRolesService} from "../user-roles/user-roles.service";
import {SetRoleDto} from "../user-roles/dto/set-role.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                                    private userRolesService: UserRolesService ) {}

    async createUser(dto: CreateUserDto){
        const user = await this.userRepository.create(dto);
        const role = await this.userRolesService.getRoleByName("Admin");

        await user.$set('roles', [role.id]);

        user.roles = [role];

        return user;
    }

    async getAllUsers(){
        const users = await this.userRepository.findAll({ include: {all: true} });

        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: {email}, include: { all: true } });

        return user;
    }

    async setRole(dto: SetRoleDto) {
        const user = await this.getUserByEmail(dto.email);

        const role = await this.userRolesService.getRoleByName(dto.role);

        await user.$set('roles', [role.id]);
        user.roles = [role];


        return user;
    }

}
