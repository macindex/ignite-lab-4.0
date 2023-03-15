import { PrismaService } from './prisma.service';
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { randomUUID } from 'crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list(){
    return this.prisma.notification.findMany();
  }
  @Post()
  async create(){
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'You have a new notification message',
        category: 'social',
        recipientId: randomUUID(),
      }
    });
  }
}
