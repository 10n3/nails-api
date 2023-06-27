import {ArgumentsHost, Catch, NotFoundException, ExceptionFilter } from "@nestjs/common";
import {BaseExceptionFilter} from "@nestjs/core";

@Catch(NotFoundException)
export class ExceptionsLoggerFilter implements ExceptionFilter {
    catch(exception: NotFoundException, host: ArgumentsHost) {

        // const context = host.switchToHttp();
        // const response = context.getResponse<Response>();
        // const request = context.getRequest<Request>();
        // const status = exception.getStatus();
        // const message = exception.message;
        //
        // response
        //     .status(status)
        //     .json({
        //         message,
        //         statusCode: status,
        //         time: new Date().toISOString(),
        //     });

        // console.log('Exception thrown', exception);
        // super.catch(exception, host);
    }
}