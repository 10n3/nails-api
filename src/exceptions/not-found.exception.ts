import {HttpException, HttpStatus} from "@nestjs/common";

class NotFoundException extends HttpException {
    constructor(item: string, ID: any) {
        super(`${item} with '${ID}' not found`, HttpStatus.NOT_FOUND);


    }
}