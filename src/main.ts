import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/env-pluggin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("server running in port : ",envs.port);
  await app.listen(envs.port);
}
bootstrap();
