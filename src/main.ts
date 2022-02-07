import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // whitelist => remove atributo enviado que não está configurado no dto
  // forbidNonWhitelisted => não permite que seja enviado atributo não configurado no dto
  // transform => transformar o objeto que foi recebido para o tipo do dto configurado
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  ); 

  await app.listen(3000);
}

bootstrap();
