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
  secure: false,
});

export default withAuth(
  config({
    db: {
      adapter: 'prisma_postgresql',
      url: process.env.DATABASE_URL,
      onConnect: async (context) => {
        try {
          if (await context.lists.Product.count() === 0) {
            await context.lists.Product.createMany({ data: products.map(p => ({ data: p })) });
          }
          if (await context.lists.User.count() === 0) {
            await context.lists.User.createMany({ data: users.map(p => ({ data: p })) });
          }
        } catch (err) {
          console.log(err)
        }
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
