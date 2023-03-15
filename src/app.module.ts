import { PrismaService } from './prisma.service';
import { PostmarkMailService } from './mail/postmark-mail.service';
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
    PrismaService,
    {
      provide: MailService,
      useClass: PostmarkMailService,
    }
  ],
})
export class AppModule {}
