import { Village } from './model/village.model';
import { Commune } from './model/commune.model';
import { District } from './model/district.model';
import { Province } from './model/province.model';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'masterlist',
      entities: [
        Province, 
        District,
        Commune,
        Village
      ],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([Province, District, Commune, Village])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
