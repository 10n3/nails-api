import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Records} from "./records.model";
import {CreateRecordDto} from "./dto/create-record.dto";

@Injectable()
export class RecordsService {

    constructor(@InjectModel(Records) private recordsRepository: typeof Records) {}

    async createOne(dto: CreateRecordDto) {
        return await this.recordsRepository.create(dto);
    }

    async getAll() {
        return await this.recordsRepository.findAll({include: {all: true}});
    }
}
