import React from 'react';
import styled from 'styled-components';
const FurnitureUtil = ({
  name,
  price,
  code,
  uniqueId,
  islogged,
  addToCart,
}) => {
  const clickhandle = () => {
    addToCart(code);
  };

  return (
    <Wrap>
      <ProductImg>
        <img
          style={{ objectFit: 'cover' }}
          src={`/images/${name}.png`}
          alt='item'
        />
      </ProductImg>

      <InfoBox>
        <Info>{name}</Info>
        <Info>
          <sup>&#8377;</sup>
          {price}
        </Info>
        {islogged ? <BuyBtn onClick={clickhandle}>Add to Cart</BuyBtn> : ''}
      </InfoBox>
    </Wrap>
  );
};

export default FurnitureUtil;

const Wrap = styled.div`
  hieght: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ProductImg = styled.div`
  img {
    max-width: 100%;
    max-height: 100%;
  }
  height: 30%;
  width: 70%;
`;

const InfoBox = styled.div`
  text-align: center;
`;

const Info = styled.p`
  color: #060a0b;
  sup {
    color: #060a0b;
  }
`;

const BuyBtn = styled.button`
  background-color: black;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;
