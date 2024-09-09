import { ConfigModule } from "@nestjs/config";

export const databaseConfig = {
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  inject: [],
};

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    })
  },
];