import React, { FC } from "react";
import type { CartItem as CartItemType } from '../../../graphql/generated';
import formatMoney from "../../../utils/formatMoney";
import { CartItemStyles } from "./CartItem.style";

type Props = {
  item: CartItemType;
}

const CartItem: FC<Props> = ({ item: { product, quantity } }) => {
  return (
    <CartItemStyles>
      <img
        width="100"
        src={product?.img ?? ''}
        alt={product?.name ?? ''}
      />
      <div>
        <h3>{product?.name}</h3>
        <p>
          {formatMoney(product!.price! * quantity!)}-
          <em>
            {quantity} &times; {formatMoney(product!.price!)} each
          </em>
        </p>
      </div>
    </CartItemStyles>
  )
}

export default CartItem;