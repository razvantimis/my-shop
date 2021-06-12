import React, { FC } from "react";
import type { Product } from '../../../graphql/generated';
import formatMoney from "../../../utils/formatMoney";
import { Price, ProductStyles, Title } from "./ProductItem.style";

type Props = {
  product: Product
}

const ProductItem: FC<Props> = ({ product }) => (
  <ProductStyles>
    <img
      src={product.img ?? ''}
      alt={product.name ?? ''}
    />
    <Title>
      {product.name}
    </Title>
    <Price>{formatMoney(product.price ?? 0)}</Price>
    <p>{product.description}</p>
  </ProductStyles>
)
export default ProductItem;