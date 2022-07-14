import {Injectable} from '@nestjs/common';
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {UserRolesService} from "../user-roles/user-roles.service";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                                    private userRolesService: UserRolesService ) {}

    async createUser(dto: CreateUserDto){
        const user = await this.userRepository.create(dto);
        const role = await this.userRolesService.getRoleByName("User");

        await user.$set('roles', [role.id]);

        return user;
    }

    async getAllUsers(){
        const users = await this.userRepository.findAll({ include: {all: true} });

        return users;
    }



}
