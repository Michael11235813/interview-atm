import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('v1/atm')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('pin')
  getHello(): string {
    console.warn('getHello is called.');
    return this.appService.getHello();
  }

  @Post('pin')
  changePin(
    @Body() body: { oldPin: string; newPin: string; userId: string },
  ): void {
    const { oldPin, newPin, userId } = body;
    console.warn('changePin is called.');
    // this.atmService.changePin(oldPin, newPin, userId);
  }
}
