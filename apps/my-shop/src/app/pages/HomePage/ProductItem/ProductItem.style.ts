import styled from "styled-components";


export const ProductStyle = styled.div`
  background: white;
  box-shadow: var(--product-shadow);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  img {
    width: 100%;
    height: 400px;
  }
  p {
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  
`;

export const Title = styled.h3`
  margin: 10px 1rem 0;
  text-align: center;
`;

export const Price = styled.span`
  background: var(--red);
  color: white;
  font-weight: bold;
  padding: 5px;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
`;
