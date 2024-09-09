import { databaseProviders } from './../config/database.config';
import { Module } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { AppService } from "src/app.service";
import { databaseConfig } from "src/config/database.config";

@Module({
  imports: [...databaseConfig.imports],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})

export class DatabaseModule {}