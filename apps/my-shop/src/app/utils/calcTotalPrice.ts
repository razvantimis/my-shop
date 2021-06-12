import { CartItem } from "../graphql/generated";

export default function calcTotalPrice(cart: CartItem[]) {
  return cart.reduce((total, cartItem) => {
    return total + cartItem!.quantity! * cartItem.product!.price!;
  }, 0);
}
