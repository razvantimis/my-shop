import styled from "styled-components";


export const HeaderStyles = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 50px;
  nav {
    flex: 1;
  }
`;

export const Logo = styled.h1`
  font-size: 2rem;
  margin-left: 1rem;
  position: relative;
  z-index: 2;
  background: red;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

export const UlStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 2rem;
  list-style: none;
  justify-content: flex-end;
  a,button {
    padding: 1rem 3rem;
    text-transform: uppercase;
    font-size: 1em;
    border: 0;
   
    &:hover,
    &:focus {
     color: var(--red);
    }
  }
`;