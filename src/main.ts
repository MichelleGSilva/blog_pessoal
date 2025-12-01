import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ajustando o fuso horário do DB
  process.env.TZ = '-03:00'

  // Aplicando os recursos de validação
  app.useGlobalPipes(new ValidationPipe());

  // Habilitando o CORS do projeto
  app.enableCors();

  // Indico qual porta o projeto esta sendo executado
  await app.listen(4000);
  
}
bootstrap();
