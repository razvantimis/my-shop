import { password, relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

const User = list({
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password({ isRequired: true }),
    cart: relationship({
      ref: 'CartItem.user',
      many: true,
    }),
  },
});

export default User;