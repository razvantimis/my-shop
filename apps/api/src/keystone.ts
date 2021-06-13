import { config } from '@keystone-next/keystone/schema';
import { statelessSessions } from '@keystone-next/keystone/session';
import { createAuth } from '@keystone-next/auth';
import { lists } from './app/schema';
import extendGraphqlSchema from './app/mutation';
import { products, users } from './mockData';
let sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'The SESSION_SECRET environment variable must be set in production'
    );
  } else {
    sessionSecret = '-- DEV COOKIE SECRET; CHANGE ME --';
  }
}

const sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  sessionData: 'name',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
});
console.log(process.env.FRONTEND_URL);

export default withAuth(
  config({
    db: {
      adapter: 'prisma_postgresql',
      url: process.env.DATABASE_URL || 'postgres://alljxbmajmuhoz:2cc78ba5cbf03a67cc825e1811f61cc68ec71d10d208d33d2a92b238bc7c55b2@ec2-99-80-200-225.eu-west-1.compute.amazonaws.com:5432/d1vl7hvuhksspe',
      onConnect: async (context) => {
        // await context.db.lists.product.createMany({ data: products.map(p => ({ data: p })) });
        // await context.db.lists.user.createMany({ data: users.map(p => ({ data: p })) });
      }
    },
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    ui: {
      isAccessAllowed: (context) => !!(context.session && context.session.data),
    },
    extendGraphqlSchema,
    lists,
    session,
  })
);
