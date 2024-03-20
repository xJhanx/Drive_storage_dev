import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/env-pluggin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  await app.listen(envs.port);
  console.log("server running in port : ",envs.port);
}
bootstrap();
