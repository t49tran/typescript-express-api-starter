import jwt from 'jsonwebtoken';
import { IUser } from 'src/models/user';
import { logger } from 'src/utils/logger';
import { JWT_SECRET } from 'src/utils/secret';

export const sign = (user: IUser) => {
  if (!JWT_SECRET) {
    logger.error('No jwt secret string found');

    throw Error('No jwt secret found');
  }

  return jwt.sign({ ...user, iat: Date.now() }, JWT_SECRET);
};
