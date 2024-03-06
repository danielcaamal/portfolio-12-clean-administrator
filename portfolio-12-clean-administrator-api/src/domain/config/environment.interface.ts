export interface DatabaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  schema: string;
  synchronize: boolean;
}

export interface EnvironmentConfig {
  getMongooseConfig(): DatabaseConfig;
  getPostgresConfig(): DatabaseConfig;
}
