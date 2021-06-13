import React, { FC, createContext, useState, useContext } from "react";


type Context = {
  total: number;
  addToCart: (id: string, price: number) => void;
  checkout: () => void;
}


const CartContext = createContext<Context>({
  total: 0,
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
  const [cartList, setCartList] = useState<CartList>({});

  const checkout = () => {
    setTotal(0);
    setCartList({});
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
        total,
        addToCart,
        checkout,
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


