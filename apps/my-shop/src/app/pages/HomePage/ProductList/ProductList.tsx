import React, { FC } from "react";
import { useAllProductsQuery } from "../../../graphql/generated";
import ProductItem from "../ProductItem";
import { ProductListStyles } from "./ProductList.style";


const ProductList: FC = () => {
  const { data, error, loading } = useAllProductsQuery({ variables: { skip: 0, first: 100 } })
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ProductListStyles>
      {data?.allProducts?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductListStyles>
  );
}

export default ProductList;