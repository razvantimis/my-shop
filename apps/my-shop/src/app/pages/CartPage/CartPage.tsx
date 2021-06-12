import React, { FC } from "react";
import useCurrentUser from "../../hooks/useCurrentUser";
import calcTotalPrice from "../../utils/calcTotalPrice";
import formatMoney from "../../utils/formatMoney";
import CartItem from "./CartItem";



const CartPage: FC = () => {
  const user = useCurrentUser();

  return (
    <section>
      <header>
        <h2>{user?.name}'s Cart</h2>
      </header>
      <ul>
        {user?.cart.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </ul>
      <footer>
        <p>Total: {formatMoney(calcTotalPrice(user!.cart))}</p>
      </footer>
    </section>
  )
}

export default CartPage;