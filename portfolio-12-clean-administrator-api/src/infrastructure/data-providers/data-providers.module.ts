// Framework
import { Module } from '@nestjs/common';

// Infrastructure
import { MongoDataProviderModule } from './mongoose';

// Replace or add with any other data provider module
@Module({
  imports: [MongoDataProviderModule],
  exports: [MongoDataProviderModule],
})
export class DataServicesModule {}
