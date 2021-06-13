async function checkout(
  root,
  _,
  context,
) {
  const sesh = context.session;
  if (!(sesh && sesh.itemId)) {
    throw new Error('You must be logged in to do this!');
  }
  const user = await context.lists.User.findOne({
    where: { id: sesh.itemId },
    resolveFields: String.raw`
        id
        name
        email
        cart {
          id
          quantity
          product {
            price
            id
          }
        }
      `
  })

  // create order

  const cartItemIds = user.cart.map(cartItem => cartItem.id);
  await context.lists.CartItem.deleteMany({
    ids: cartItemIds
  });

  return true;
}

export default checkout;
