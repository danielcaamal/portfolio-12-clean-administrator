// Framework
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Domain
import { IUserRepository } from 'src/domain/';

// Infrastructure
import { PostgresConfigModule } from './config';
import { PostgresUserRepository } from './repositories';
import { PostgresUser } from './models';

@Module({
  imports: [PostgresConfigModule, TypeOrmModule.forFeature([PostgresUser])],
  providers: [
    {
      provide: IUserRepository,
      useClass: PostgresUserRepository,
    },
  ],
  exports: [IUserRepository],
})
export class PostgresDataProviderModule {}
