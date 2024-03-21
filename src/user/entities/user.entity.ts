import { RolEntity } from 'src/rol/Entities/Rol.entiti';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @Column()
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  age : number;

  @Column()
  gender : string;

  @OneToOne(() => RolEntity)
  @JoinColumn()
  rol : RolEntity;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: string;

  @Column({type: 'timestamp',default: () => 'CURRENT_TIMESTAMP'  })
  updatedAt: string;
}
