import { NestFactory } from '@nestjs/core';
import { upperFirst } from 'lodash';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, Logger } from '@nestjs/common';

const PORT = process.env.PORT;

const setupSwagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('Lumen Bazar API')
    .setDescription('Lumen Bazar API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    operationIdFactory: (controllerKey: string, methodKey: string) =>
      controllerKey
        ? `${controllerKey.replace(/controller/i, 'Service')}${upperFirst(methodKey)}`
        : methodKey,
  });

  SwaggerModule.setup('api', app, document);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  app.setGlobalPrefix('api');
  setupSwagger(app);

  await app.listen(PORT);

  Logger.log(`api is running on port: ${PORT}`);
}

bootstrap();
