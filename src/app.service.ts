import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
    private readonly databaseFilePath = 'database.json';

    public changePin(oldPin: string, newPin: string, userId: string): void {
        // ////////////////////
        // Start Coding here //
        // ////////////////////

        this.logger.debug(`Received old pin="${oldPin}", new pin="${newPin}" and userId="${userId}".`);

        // //////////////////
        // End Coding here //
        // //////////////////
}
