import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }));

    const documentConfig = new DocumentBuilder()
        .setTitle('NestJS API Example')
        .setDescription('The API description')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, documentConfig);

    SwaggerModule.setup('api', app, document);
    
    await app.listen(3000);
}
bootstrap();
