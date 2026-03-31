// types.ts

import { RedisOptions } from 'ioredis';

export type CacheOptions = {
  host: string;
  port: number;
  password?: string;
  db?: number;
};

export type RedisConfig = {
  host: string;
  port: number;
  password?: string;
  db?: number;
  options?: RedisOptions;
};

export type RedisStoreOptions = {
  host: string;
  port: number;
  password?: string;
  db?: number;
  prefix?: string;
};

export type RedisPubSubOptions = {
  host: string;
  port: number;
  password?: string;
  db?: number;
  options?: RedisOptions;
};