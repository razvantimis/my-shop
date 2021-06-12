import { FC } from "react";
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
    <button disabled={loading} type="button" onClick={() => addToCart()}>
      Add{loading && 'ing'} To Cart
    </button>
  )
}

export default AddToCartButton;