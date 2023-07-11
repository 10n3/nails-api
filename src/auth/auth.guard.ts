import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {
    }

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if(!token) {
            throw new HttpException('Missing token', HttpStatus.BAD_REQUEST);
        }

        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                { secret: process.env.SECRET_KEY }
            );
            request['user'] = payload;
        } catch {
            throw new HttpException('Token does not match', HttpStatus.BAD_REQUEST);
        }

        return true;

    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.get('Authorization')?.split(' ') ?? [];
        return type == 'Bearer' ? token : undefined;
    }
}