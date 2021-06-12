import { FC } from "react";
import type { Product } from '../../../graphql/generated';

type Props = {
  product: Product
}

const ProductItem: FC<Props> = ({ product: { name } }) => (
  <div>{name}</div>
)
export default ProductItem;