import { HttpModule } from './http.module';
import { SMTPMailService } from './mail/smtp-mail.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: SMTPMailService,
    }
  ],
})
export class AppModule {}
