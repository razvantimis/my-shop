import styled from "styled-components";

const RedButton = styled.button`
   background-color: var(--red);
   color: white;
   font-size: 2rem;
   font-weight: bold;
   border-radius: 15px;
   padding: 5px;
   border: 1px solid var(--black);
   width: 200px;
   align-self: center;
   margin-bottom: 20px;

  &:hover,&:active {
    border: 1px solid grey;
    background-color: var(--red-light)
  }
`
export default RedButton;