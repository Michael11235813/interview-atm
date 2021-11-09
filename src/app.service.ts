import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  private readonly databaseFilePath = 'database.json';

  public changePin(oldPin: string, newPin: string, userId: string): void {
    // ////////////////////
    // Start Coding here //
    // ////////////////////

    const fs = require('fs');

    let rawdata = fs.readFileSync(this.databaseFilePath);
    let student = JSON.parse(rawdata);
    console.log(student);

    this.logger.debug(
      `Received old pin="${oldPin}", new pin="${newPin}" and userId="${userId}".`,
    );

    // //////////////////
    // End Coding here //
    // //////////////////
  }
}
