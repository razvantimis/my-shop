import React, { FC } from "react";
import { Link } from "react-router-dom";
import { HeaderStyles, Logo, UlStyles } from "./Header.style";


const Header: FC = () => (
  <HeaderStyles>
    <Logo>
      <Link to="/">My Shop</Link>
    </Logo>
    <nav>
      <UlStyles>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </UlStyles>
    </nav>
  </HeaderStyles>
);

export default Header;