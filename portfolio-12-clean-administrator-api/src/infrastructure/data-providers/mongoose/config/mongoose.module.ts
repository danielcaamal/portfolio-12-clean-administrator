// Framework
import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';

// Infrastructure
import { EnvironmentModule, EnvironmentService } from 'src/infrastructure';

export const getMongooseModuleOptions = (
  config: EnvironmentService,
): MongooseModuleOptions => {
  return {
    uri: `mongodb+srv://${config.getDatabaseHost()}`,
    dbName: config.getDatabaseName(),
    user: config.getDatabaseUser(),
    pass: config.getDatabasePassword(),
  } as MongooseModuleOptions;
};

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [EnvironmentModule],
      inject: [EnvironmentService],
      useFactory: getMongooseModuleOptions,
    }),
  ],
  exports: [MongooseModule],
})
export class MongooseConfigModule {}
