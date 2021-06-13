import React, { FC } from "react";
import RedButton from "../../components/style/RedButton.style";
import { CurrentUserDocument, useCheckoutMutation } from "../../graphql/generated";
import useCurrentUser from "../../hooks/useCurrentUser";
import calcTotalPrice from "../../utils/calcTotalPrice";
import formatMoney from "../../utils/formatMoney";
import CartItem from "./CartItem";



const CartPage: FC = () => {
  const user = useCurrentUser();
  const [checkout] = useCheckoutMutation({
    refetchQueries: [{ query: CurrentUserDocument }],
  });

  const handlePayment = async () => {
    console.log('payment')
    await checkout();
  }

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
        <RedButton type="button" onClick={handlePayment}>Pay {formatMoney(calcTotalPrice(user!.cart))}</RedButton>
      </footer>
    </section>
  )
}

export default CartPage;