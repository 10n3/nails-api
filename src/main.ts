import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('nails-api')
      .setDescription('NestJs API for beauty salons to record clients')
      .setVersion('1.0.0')
      .addTag('1ON3')
      .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)

  //Uncomment to limit access to unauthorized users
  // app.useGlobalGuards(JwtAuthGuard);


  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
bootstrap();
