import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes( new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle('Hyperlocal Franquias')
    .setDescription('API de gestão de franqueados e administração de franquias')
    .setVersion('1.0.0')
    .addTag('Authorization')
    .addTag('User')
    .addTag('Tier')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
