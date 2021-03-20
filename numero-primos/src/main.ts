import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  const config = new DocumentBuilder()
    .setTitle('Prime example')
    .setDescription('The prime API search number prime between 2 and the number entered')
    .setVersion('1.0')
    .addTag('prime')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
