// Framework
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

// Infrastructure
import { EnvironmentModule, EnvironmentService } from 'src/infrastructure';

export const getPostgresModuleOptions = (
  config: EnvironmentService,
): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: config.getPostgresConfig().host,
    port: config.getPostgresConfig().port,
    username: config.getPostgresConfig().user,
    password: config.getPostgresConfig().password,
    database: config.getPostgresConfig().database,
    synchronize: config.getPostgresConfig().synchronize,
  } as TypeOrmModuleOptions;
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentModule],
      inject: [EnvironmentService],
      useFactory: getPostgresModuleOptions,
    }),
  ],
  exports: [TypeOrmModule],
})
export class PostgresConfigModule {}

export const LENGTH = 100;
export const MAX_LENGTH = 255;
