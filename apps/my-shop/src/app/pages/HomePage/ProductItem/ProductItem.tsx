import React, { FC } from "react";
import type { Product } from '../../../graphql/generated';
import formatMoney from "../../../utils/formatMoney";
import AddToCartButton from "../AddToCartButton";
import { Price, ProductStyles, Title } from "./ProductItem.style";

type Props = {
  product: Product;
  isAuth: boolean;
}

const ProductItem: FC<Props> = ({ product, isAuth }) => (
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
    {isAuth && <AddToCartButton id={product.id} />}
  </ProductStyles>
)
export default ProductItem;