import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('bulkInsert')
  bulkInsert() {
    this.appService.bulkInsert()
  }
}
