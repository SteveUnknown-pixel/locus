import { PrismaClient } from '.prisma/client';

export interface Context {
  prisma?: PrismaClient;
  req?: any;
  res?: any;
}