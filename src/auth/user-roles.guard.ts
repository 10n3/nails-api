import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException
} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";
import {request} from "http";
import {Reflector} from "@nestjs/core";
import {ROLES_KEY} from "./roles-auth.decorator";

@Injectable()
export class UserRolesGuard implements CanActivate {

    constructor(private jwtService: JwtService,
                private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        try {
            const request = context.switchToHttp().getRequest();

            const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
                context.getHandler(),
                context.getClass(),
            ]);

            if(!requiredRoles) {
                return true;
            }

            const authHeader = request.headers.authorization;
            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];

            if(bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({ message: 'User is not authorized' });
            }

            const user = this.jwtService.verify(token);
            request.user = user;

            return user.roles.some( role => requiredRoles.includes( role.name ) );

        } catch(error) {
            throw new HttpException(`${error.message}`, HttpStatus.FORBIDDEN );

        }
    }

}