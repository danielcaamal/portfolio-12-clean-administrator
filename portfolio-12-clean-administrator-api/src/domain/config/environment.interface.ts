export interface MongooseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  schema: string;
  synchronize: boolean;
}

export interface EnvironmentConfig {
  getMongooseConfig(): MongooseConfig;
}
