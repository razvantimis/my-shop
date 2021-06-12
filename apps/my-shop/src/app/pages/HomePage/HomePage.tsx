import React, { FC } from "react";
import useCurrentUser from "../../hooks/useCurrentUser";
import ProductList from "./ProductList";

const HomePage: FC = () => {
  const user = useCurrentUser();
  return (
    <div>
      <ProductList isAuth={!!user} />
    </div>
  )
}

export default HomePage;