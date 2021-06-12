import { createSchema } from '@keystone-next/keystone/schema';
import User from './User';
import Product from './Product';
import CartItem from './CartItem';

export const lists = createSchema({
  User,
  Product,
  CartItem
});
