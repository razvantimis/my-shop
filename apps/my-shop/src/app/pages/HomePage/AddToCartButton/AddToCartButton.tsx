import React, { FC } from "react";
import RedButton from "../../../components/style/RedButton.style";
import { CurrentUserDocument, useAddToCartMutation } from "../../../graphql/generated";

type Props = {
  id: string;
}
const AddToCartButton: FC<Props> = ({ id }) => {
  const [addToCart, { loading }] = useAddToCartMutation({
    variables: { id },
    refetchQueries: [{ query: CurrentUserDocument }],
  });

  return (
    <RedButton disabled={loading} type="button" onClick={() => addToCart()}>
      Add{loading && 'ing'} To Cart
    </RedButton>
  )
}

export default AddToCartButton;