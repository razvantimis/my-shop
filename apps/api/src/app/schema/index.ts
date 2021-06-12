import { createSchema } from '@keystone-next/keystone/schema';
import User from './User';
import Product from './Product';

export const lists = createSchema({
  User,
  Product
});
