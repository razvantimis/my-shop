import React, { FC, createContext, useState, useContext } from "react";
import { CurrentUserDocument, useCheckoutMutation } from "../graphql/generated";


type Context = {
  total: number;
  isLoading: boolean,
  length: number,
  addToCart: (id: string, price: number) => void;
  checkout: () => void;
}


const CartContext = createContext<Context>({
  total: 0,
  length: 0,
  isLoading: false,
  addToCart: () => undefined,
  checkout: () => undefined,
})
const Provider = CartContext.Provider;

type CartList = {
  [id: string]: {
    price: number,
    quantity: number,
  }
}

const CartStateProvider: FC = ({ children }) => {

  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [cartList, setCartList] = useState<CartList>({});
  const [checkoutBE] = useCheckoutMutation({
    refetchQueries: [{ query: CurrentUserDocument }],
  });

  const checkout = async () => {
    try {
      setIsLoading(true)
      await checkoutBE();
      setTotal(0);
      setCartList({});
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  const addToCart = (id: string, price: number) => {
    if (cartList[id]) {
      cartList[id].price += price;
      cartList[id].quantity += 1;
    } else {
      cartList[id] = {
        price,
        quantity: 1
      }
    }

    const sum = Object.values(cartList).reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0)

    setTotal(sum);
    console.log(cartList)
  }


  return (
    <Provider
      value={{
        isLoading,
        total,
        addToCart,
        checkout,
        length: Object.values(cartList).length
      }}
    >
      {children}
    </Provider>
  );
}

function useCartState() {
  // We use a consumer here to access the local state
  const all = useContext(CartContext);
  return all;
}

export { CartStateProvider, useCartState };


