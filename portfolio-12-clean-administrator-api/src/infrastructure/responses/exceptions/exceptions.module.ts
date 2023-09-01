// Framework
import { Module } from '@nestjs/common';

// Infrastructure
import { ExceptionsService } from './exceptions.service';

@Module({
  providers: [ExceptionsService],
})
export class ExceptionsModule {}
