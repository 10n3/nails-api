import {forwardRef, Module} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
      forwardRef(() => UsersModule) ,
      JwtModule.register({
        secret: process.env.SECRET_KEY || 'SeCrEtKeY',
        signOptions: {
          expiresIn: '24h',
        }
      })
  ],
    exports:[
        AuthService,
        JwtModule
    ]
})
export class AuthModule {}
