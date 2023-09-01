// Framework
import { Module } from '@nestjs/common';

// Infrastructure
import { LoggerService } from './logger.service';

@Module({
  providers: [LoggerService],
})
export class LoggerModule {}
