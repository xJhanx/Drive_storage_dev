import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { credentials} from './config/database_credentiasl';
import { AuthModule } from './auth/auth.module';
import { RolModule } from './rol/rol.module';

@Module({
  imports: [TypeOrmModule.forRoot(credentials),UserModule, AuthModule, RolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
