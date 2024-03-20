import { Injectable } from '@nestjs/common';
import { SigInData } from './dto/singin.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService : UserService){
    }

    async accessToSystem(data : SigInData){
        const password = data.password;
        const user = await this.userService.finByEmail(data.email);

        if(!user) return false 

        if(user){
            return await bcrypt.compare(password,user.password);
        }
        
    }
}
