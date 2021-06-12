import React, { FC } from "react";
import { Link } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";
import SignOut from "../SignOut";
import { HeaderStyles, Logo, UlStyles } from "./Header.style";


const Header: FC = () => {
  const user = useCurrentUser();

  return (
    <HeaderStyles>
      <Logo>
        <Link to="/">My Shop</Link>
      </Logo>
      <nav>
        <UlStyles>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <SignOut />
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </UlStyles>
      </nav >
    </HeaderStyles >
  );
}

export default Header;