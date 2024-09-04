import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './auth/users/users.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DocumentsModule } from './documents/documents.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [UsersModule, AuthModule, DocumentsModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
