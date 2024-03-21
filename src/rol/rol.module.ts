import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { RolEntity } from './Entities/Rol.entiti';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, RolEntity])],
  controllers: [RolController],
  providers: [RolService],
})
export class RolModule {}
