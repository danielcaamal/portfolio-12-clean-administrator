// Framework
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

// External
import { join } from 'path';
import { json } from 'express';

// Infrastructure
import { AppModule } from './app.module';
import {
  AllExceptionFilter,
  LoggerService,
  LoggingInterceptor,
  ResponseInterceptor,
} from './infrastructure';

async function setMiddlewares(app: NestExpressApplication) {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
    }),
  );
  app.enableCors();
  app.use(json({ limit: '10000mb' }));
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setGlobalPrefix(process.env.PREFIX || '/api/v1');
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
}

async function setSwagger(app: NestExpressApplication) {
  const config = new DocumentBuilder()
    .setTitle('Clean API')
    .setDescription('Clean architecture API')
    .setVersion('1.0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(process.env.PREFIX || '/api/v1' + '/docs', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await setMiddlewares(app);
  await setSwagger(app);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
