import { Request, Response, Router } from 'express';
import * as JWTService from 'src/services/jwt';

const authRoutes = Router();

authRoutes.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res
      .json({
        message: 'Missing parameters'
      })
      .status(400);
  }

  const token = JWTService.sign({
    uuid: 'TEST_UUID',
    username: 'TEST_USERNAME',
    firstName: 'TEST_FIRSTNAME',
    lastName: 'TEST_LASTNAME'
  });

  res.json({ token });
});

export { authRoutes };
