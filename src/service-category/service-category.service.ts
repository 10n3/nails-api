import { Injectable } from '@nestjs/common';
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
}
