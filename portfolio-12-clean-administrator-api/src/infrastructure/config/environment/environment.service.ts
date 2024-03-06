// Framework
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// Domain
import { EnvironmentConfig, DatabaseConfig } from 'src/domain';

@Injectable()
export class EnvironmentService implements EnvironmentConfig {
  constructor(private configService: ConfigService) {}

  private readonly DATABASE_HOST = 'DATABASE_HOST';
  private readonly DATABASE_PORT = 'DATABASE_PORT';
  private readonly DATABASE_USER = 'DATABASE_USER';
  private readonly DATABASE_PASSWORD = 'DATABASE_PASSWORD';
  private readonly DATABASE_NAME = 'DATABASE_NAME';
  private readonly DATABASE_SCHEMA = 'DATABASE_SCHEMA';
  private readonly DATABASE_SYNCHRONIZE = 'DATABASE_SYNCHRONIZE';

  getMongooseConfig(): DatabaseConfig {
    return {
      database: this.configService.get<string>(this.DATABASE_NAME),
      host: this.configService.get<string>(this.DATABASE_HOST),
      password: this.configService.get<string>(this.DATABASE_PASSWORD),
      port: this.configService.get<number>(this.DATABASE_PORT),
      schema: this.configService.get<string>(this.DATABASE_SCHEMA),
      synchronize: this.configService.get<boolean>(this.DATABASE_SYNCHRONIZE),
      user: this.configService.get<string>(this.DATABASE_USER),
    };
  }

  getPostgresConfig(): DatabaseConfig {
    return {
      database: this.configService.get<string>(this.DATABASE_NAME),
      host: this.configService.get<string>(this.DATABASE_HOST),
      password: this.configService.get<string>(this.DATABASE_PASSWORD),
      port: this.configService.get<number>(this.DATABASE_PORT),
      schema: this.configService.get<string>(this.DATABASE_SCHEMA),
      synchronize: this.configService.get<boolean>(this.DATABASE_SYNCHRONIZE),
      user: this.configService.get<string>(this.DATABASE_USER),
    };
  }

  validateEnvironmentVariables() {
    // Put the required environment variables in an array
    const environmentVariables = [
      this.DATABASE_HOST,
      this.DATABASE_PORT,
      this.DATABASE_USER,
      this.DATABASE_PASSWORD,
      this.DATABASE_NAME,
      // this.DATABASE_SCHEMA, optional
      this.DATABASE_SYNCHRONIZE,
    ];

    environmentVariables.forEach((environmentVariable) => {
      if (!this.configService.get<string>(environmentVariable)) {
        throw new Error(
          `Environment variable ${environmentVariable} is not defined`,
        );
      }
    });
  }
}
