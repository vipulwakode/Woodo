import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';

const CartUtil = ({ productName, price, uniqueId, deleteFromCart }) => {
  const clickHandle = () => {
    const id = uniqueId;
    deleteFromCart(id);
  };
  return (
    <Wrap>
      <div>
        <ImgCont>
          <img
            style={{ objectFit: 'contain' }}
            src={`/images/${productName}.png`}
            alt='product'
          />
        </ImgCont>
        <InfoBox>
          <ImgInfo>Name: {productName}</ImgInfo>
          <ImgInfo>
            Price: <sup>&#8377;</sup>
            {price}
          </ImgInfo>
        </InfoBox>
      </div>
      <span onClick={() => clickHandle()}>
        <DeleteIcon />
      </span>
    </Wrap>
  );
};

export default CartUtil;

const Wrap = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  span {
    background-color: #fabe1c;
    cursor: pointer;
    align-items: center;
    margin: auto 0px;
  }
  div {
    display: flex;
  }
`;

const ImgCont = styled.div`
  max-width: 20%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ImgInfo = styled.div`
  color: black;
  padding: 10px;
  font-size: 22px;
  sup {
    color: black;
    font-size: 22px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;
