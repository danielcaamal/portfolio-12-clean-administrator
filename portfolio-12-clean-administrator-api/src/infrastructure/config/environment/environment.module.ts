// Framework
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Infrastructure
import { EnvironmentService } from './environment.service';

@Module({
  providers: [EnvironmentService],
  exports: [EnvironmentService],
  imports: [ConfigModule],
})
export class EnvironmentModule {}
