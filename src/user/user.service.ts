import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ManagerSecret } from 'src/helpers/managerSecret';
@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private UserRepository : Repository<UserEntity>,
  private managerSecret : ManagerSecret){
  }

  async create(createUserDto: CreateUserDto) {
    try{

      const user = new UserEntity();
      user.age = createUserDto.age;
      user.email = createUserDto.email;
      user.gender = createUserDto.gender;
      user.name = createUserDto.name;
      user.password = await this.managerSecret.encriptPassword(createUserDto.password);
      
      return this.UserRepository.save(user);
    }catch(error){
      throw new Error(error);
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async finByEmail(email : string){
    return await this.UserRepository.findOne( {
      where :{
        email : email
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
