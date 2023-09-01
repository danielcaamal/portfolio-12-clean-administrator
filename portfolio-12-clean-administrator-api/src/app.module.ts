// Framework
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Infrastructure
import {
  DataServicesModule,
  EnvironmentModule,
  ExceptionsModule,
  LoggerModule,
} from './infrastructure';

// Presentation
import { UsersModule } from './presentation';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    EnvironmentModule,
    LoggerModule,
    ExceptionsModule,
    DataServicesModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
