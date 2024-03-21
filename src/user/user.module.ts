import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { ManagerSecret } from 'src/helpers/managerSecret';
import { RolEntity } from 'src/rol/Entities/Rol.entiti';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity,RolEntity])],
  controllers: [UserController],
  providers: [UserService,ManagerSecret],
  exports: [TypeOrmModule, UserService],
})
export class UserModule {}
