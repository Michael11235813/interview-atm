import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('v1/atm')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('pin')
  changePin(@Query() query): void {
    console.warn('changePin is called with oldPin: ', query);
    const { oldPin, newPin, userId } = query;
    this.appService.changePin(oldPin, newPin, userId);
  }
}
