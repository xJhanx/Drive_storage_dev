import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { credentials} from './config/database_credentiasl';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(credentials),UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
