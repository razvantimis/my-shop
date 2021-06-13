import React, { FC } from "react";
import RedButton from "../../../components/style/RedButton.style";
import { CurrentUserDocument, useAddToCartMutation } from "../../../graphql/generated";
import { useCartState } from "../../../state/CartState";

type Props = {
  id: string;
  price: number;
}
const AddToCartButton: FC<Props> = ({ id, price }) => {
  const [addToCart, { loading }] = useAddToCartMutation({
    variables: { id },
    refetchQueries: [{ query: CurrentUserDocument }],
  });
  const { addToCart: addToCartLocal } = useCartState();

  return (
    <RedButton disabled={loading} type="button" onClick={() => {
      addToCart()
      addToCartLocal(id, price);
    }}>
      Add{loading && 'ing'} To Cart
    </RedButton>
  )
}

export default AddToCartButton;