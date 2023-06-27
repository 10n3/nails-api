import {HttpException, Injectable, NotFoundException} from '@nestjs/common';
import {User} from "./user.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {UserRolesService} from "../user-roles/user-roles.service";
import {SetRoleDto} from "../user-roles/dto/set-role.dto";
import {CompanyService} from "../company/company.service";
import {SetCompanyToUserDto} from "./dto/set-company-to-user.dto";

@Injectable()
export class UserService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                                    private userRolesService: UserRolesService,
                                    private companyService: CompanyService) {}

    async createUser(dto: CreateUserDto){
        const user = await this.userRepository.create(dto);
        const role = await this.userRolesService.getRoleByName("Admin");

        await user.$set('roles', [role]);

        user.roles = [role];

        return user;
    }

    async getAllUsers(){
        const users = await this.userRepository.findAll({ include: {all: true} });

        if(!users) {
            throw new NotFoundException('Users');
        }

        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: {email}, include: { all: true } });

        if (!user) {
            throw new NotFoundException('User', email);
        }

        return user;
    }

    async setRole(dto: SetRoleDto) {
        const user = await this.getUserByEmail(dto.email);
        if(!user) {
            throw new NotFoundException('User', dto.email);
        }


        const role = await this.userRolesService.getRoleByName(dto.role);
        if(!role) {
            throw new NotFoundException('Role', dto.role);
        }

        await user.$set('roles', [role.id]);
        user.roles = [role];


        return user;
    }

    async setCompany(dto: SetCompanyToUserDto) {

        const user = await this.getUserByEmail(dto.email);
        if(!user) { throw new NotFoundException('User', dto.email); }

        const company = await this.companyService.getCompanyByName(dto.companies);
        if(!company) { throw new NotFoundException('Company', dto.companies); }

        await user.$set('companies', [company.id]);
        user.companies = [company];

        return user;
    }

    async deleteUserByEmail( userEmail: string) {
        const user = await this.getUserByEmail(userEmail);
        if(!user) { throw new NotFoundException('User', userEmail); }

        await this.userRepository.destroy( { where: { email: userEmail } });

        return user;

    }


}
