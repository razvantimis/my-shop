import React, { FC } from "react";
import { CurrentUserDocument, useAddToCartMutation } from "../../../graphql/generated";
import { ButtonStyle } from "./AddToCartButton.style";

type Props = {
  id: string;
}
const AddToCartButton: FC<Props> = ({ id }) => {
  const [addToCart, { loading }] = useAddToCartMutation({
    variables: { id },
    refetchQueries: [{ query: CurrentUserDocument }],
  });

  return (
    <ButtonStyle disabled={loading} type="button" onClick={() => addToCart()}>
      Add{loading && 'ing'} To Cart
    </ButtonStyle>
  )
}

export default AddToCartButton;