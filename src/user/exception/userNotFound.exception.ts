import {HttpException, HttpStatus} from "@nestjs/common";

class userNotFoundException extends HttpException {
    constructor(userID: number) {
        super(`User with ID ${userID} not found`, HttpStatus.NOT_FOUND);
    }
}