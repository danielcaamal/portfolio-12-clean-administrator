// Framework
import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';

// Infrastructure
import { EnvironmentModule, EnvironmentService } from 'src/infrastructure';

export const getMongooseModuleOptions = (
  config: EnvironmentService,
): MongooseModuleOptions => {
  return {
    uri: `mongodb+srv://${config.getMongooseConfig().host}`,
    dbName: config.getMongooseConfig().database,
    user: config.getMongooseConfig().user,
    pass: config.getMongooseConfig().password,
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
