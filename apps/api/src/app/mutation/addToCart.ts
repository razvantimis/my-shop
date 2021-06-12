
async function addToCart(
  root,
  { productId },
  context,
) {
  const sesh = context.session;
  if (!(sesh && sesh.itemId)) {
    throw new Error('You must be logged in to do this!');
  }
  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sesh.itemId }, product: { id: productId } },
    resolveFields: 'id,quantity'
  });

  const [existingCartItem] = allCartItems;
  if (existingCartItem) {
    console.log(existingCartItem)
    console.log(
      `There are already ${existingCartItem.quantity}, increment by 1!`
    );

    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
      resolveFields: false,
    });
  }
  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sesh.itemId } },
    },
    resolveFields: false,
  })
}

export default addToCart;
