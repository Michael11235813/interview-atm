import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
    private readonly databaseFilePath = 'database.json';

    public changePin(oldPin: string, newPin: string, userId: string): void {
        // ////////////////////
        // Start Coding here //
        // ////////////////////
        let pnewPin = newPin.split('');
        console.log(pnewPin);

        for (var i = 0; i <= pnewPin.length; i++) {
            let tmp2 = parseInt(pnewPin[i + 1]);
            let tmp1 = parseInt(pnewPin[i]);

            console.log(tmp1,tmp2);

            if (tmp1 + 1 == tmp2) {
                console.log("True");
            } else {
                console.log("False");
            }

        }

        this.logger.debug(`Received old pin="${oldPin}", new pin="${newPin}" and userId="${userId}".`);

        // //////////////////
        // End Coding here //
        // //////////////////
}
