import { integer, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const Product = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    price: integer(),
  },
});

export default Product;
