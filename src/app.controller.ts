import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { randomUUID } from 'crypto';

@Controller('notifications')
export class AppController {
  CreateNotificationBody(arg0: string, arg1: string, arg2: string): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list(){
    return this.prisma.notification.findMany();
  }
  @Post()
  async create(@Body() body: CreateNotificationBody){
    const { recipientId, content, category } = body
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
