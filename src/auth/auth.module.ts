import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { ManagerSecret } from 'src/helpers/managerSecret';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [UserService, AuthService, ManagerSecret],
})
export class AuthModule {}
