import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const credentials : TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'drivestorage',
  entities: [],
  synchronize: true,
  autoLoadEntities:true,
  
};