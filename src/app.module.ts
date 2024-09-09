import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DocumentsModule } from './documents/documents.module';
// import { EditorModule } from './editor/editor.module';
import { ChatModule } from './chat/chat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users/users.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.POSTGRES_HOST,
    //   port: parseInt(process.env.POSTGRES_PORT),
    //   password: process.env.POSTGRES_PASSWORD,
    //   username: process.env.POSTGRES_USER,
    //   entities: [],
    //   database: process.env.POSTGRES_DATABASE,
    //   synchronize: false,
    //   logging: true,
    // }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    DocumentsModule,
    ChatModule,
    // EditorModule
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
