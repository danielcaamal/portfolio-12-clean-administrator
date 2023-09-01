// Framework
import { Module } from '@nestjs/common';

// Infrastructure
import { DataServicesModule } from 'src/infrastructure';

// Presentation
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersUseCases } from './use-cases';

@Module({
  controllers: [UsersController],
  providers: [UsersUseCases, UsersService],
  imports: [DataServicesModule],
})
export class UsersModule {}
