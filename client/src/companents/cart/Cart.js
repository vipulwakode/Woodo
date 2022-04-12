import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CartUtil from './CartUtil';

const Cart = ({ cart, products, deleteFromCart, placeOrder }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const clickHandle = () => {
    placeOrder();
  };

  useEffect(() => {
    let total = 0;
    let arr = [];
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < cart.length; j++) {
        if (cart[j].product === products[i]._id) {
          total += products[i].price;

          arr = [
            ...arr,
            {
              productName: products[i].productName,
              price: products[i].price,
              id: cart[j]._id,
            },
          ];
        }
      }
    }
    setTotalPrice(total);
    setSelectedProducts([...arr]);
  }, [cart]);

  return (
    <Wraper>
      {selectedProducts.length ? (
        <>
          <MainCart>
            {selectedProducts.map((it) => {
              return (
                <CartUtil
                  key={it.id}
                  productName={it.productName}
                  price={it.price}
                  uniqueId={it.id}
                  deleteFromCart={deleteFromCart}
                />
              );
            })}
          </MainCart>
          <BuySection>
            <InfoBox>
              <Info>
                Total Price: <sup>&#8377;</sup>
                {totalPrice}
              </Info>
              <BuyBtn onClick={() => clickHandle()}>Order Now</BuyBtn>
            </InfoBox>
          </BuySection>
        </>
      ) : (
        <ErrorBox>Your Cart Is Empty</ErrorBox>
      )}
    </Wraper>
  );
};

export default Cart;

const Wraper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const MainCart = styled.div`
  width: 65%;
  overflow: auto;
`;

const BuySection = styled.div`
  width: 35%;
  text-align: center;
`;

const BuyBtn = styled.button`
  background-color: black;
  border-radius: 5px;
  font-size: 25px;
  padding: 10px;
  cursor: pointer;
`;

const InfoBox = styled.div`
  text-align: center;
`;
const ErrorBox = styled.div`
  color: black;
  font-size: 30px;
  font-weight: bold;
  margin: 0px auto;
`;
const Info = styled.p`
  padding-bottom: 20px;
  color: #060a0b;
  font-size: 30px;
  sup {
    font-size: 30px;
    color: #060a0b;
  }
`;
