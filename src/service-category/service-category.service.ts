import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {ServiceCategory} from "./service-category.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateServiceCategoryDto} from "./dto/create-service-category.dto";

@Injectable()
export class ServiceCategoryService {
    constructor(@InjectModel(ServiceCategory) private serviceCategoryRepository: typeof ServiceCategory) {}

    async createServiceCategory(dto: CreateServiceCategoryDto) {
        return await this.serviceCategoryRepository.create(dto);
    }

    async getAllServiceCetegories() {
            const serviceCategories = await this.serviceCategoryRepository.findAll({include: {all: true}});
            return serviceCategories;
    }

    async getServiceCategoryByName(categoryName: string) {
        const searchedCategory = await this.serviceCategoryRepository.findOne({ where: { name: categoryName } });
        return searchedCategory;
    }

    async updateServiceCategoryByName(dto: CreateServiceCategoryDto) {
        const serviceCategory = await this.getServiceCategoryByName(dto.name);

        if(!serviceCategory) { throw new HttpException('Service category with this name NOT FOUND', HttpStatus.NOT_FOUND); }

        return await this.serviceCategoryRepository.update( { ...dto, ...serviceCategory },  { where: { name: dto.name } })
    }

    async deleteUserRoleByName(name: string) {
        const serviceCategory = await this.getServiceCategoryByName(name);
        if(!serviceCategory) { throw new HttpException('Service category with this name NOT FOUND', HttpStatus.NOT_FOUND); }

        await this.serviceCategoryRepository.destroy({ where: {name} });
        return serviceCategory;
    }
}
