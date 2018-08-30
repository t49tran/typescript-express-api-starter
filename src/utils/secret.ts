import dotenv from 'dotenv';
import fs from 'fs';
import { logger } from './logger';

if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' });
} else {
  logger.error('Please provide configuration with .env file');
}

export const ENVIRONMENT = process.env.NODE_ENV;
export const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  logger.error(
    'No mongo connection string. Set MONGODB_URI environment variable.'
  );
  process.exit(1);
}
