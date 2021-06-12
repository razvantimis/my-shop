import { password, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

const User = list({
  ui: {
    listView: {
      initialColumns: ['name'],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password({ isRequired: true }),
  },
});

export default User;