import { integer, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const Product = list({
  fields: {
    name: text({ isRequired: true }),
    img: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    price: integer({ isRequired: true }),
  },
});

export default Product;
