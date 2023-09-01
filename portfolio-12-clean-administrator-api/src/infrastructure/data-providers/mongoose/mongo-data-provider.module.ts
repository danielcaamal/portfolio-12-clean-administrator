// Framework
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Domain
import { IDataServices, IUserRepository, User } from 'src/domain/';

// Infrastructure
import { MongooseConfigModule } from './config';
import { MongoUserSchema } from './models';
import { MongoDataServices, MongoUserRepository } from './repositories';

@Module({
  imports: [
    MongooseConfigModule,
    MongooseModule.forFeature([{ name: User.name, schema: MongoUserSchema }]),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
    {
      provide: IUserRepository,
      useClass: MongoUserRepository,
    },
  ],
  exports: [IDataServices, IUserRepository],
})
export class MongoDataProviderModule {}
