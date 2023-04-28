import dotenv from 'dotenv';
import express from 'express';

import type { Express, Request, Response } from 'express';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT) ?? 3000;
const baseUrl: string = process.env.BASE_URL ?? '/';

app.use(baseUrl, (_req: Request, res: Response) => {
  res.status(200);
  res.send('Hello World!');
});

export const server = app.listen(port, '0.0.0.0', 128, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
