import React, { FC } from "react";
import type { Product } from '../../../graphql/generated';
import formatMoney from "../../../utils/formatMoney";
import AddToCartButton from "../AddToCartButton";
import { Price, ProductStyle, Title } from "./ProductItem.style";

type Props = {
  product: Product;
  isAuth: boolean;
}

const ProductItem: FC<Props> = ({ product, isAuth }) => (
  <ProductStyle>
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
  </ProductStyle>
)
export default ProductItem;