import React from 'react';
import styled from 'styled-components';
import FurnitureUtil from './FurnitureUtil';

const Furnitures = ({ products, islogged, addToCart }) => {
  return (
    <Wrap>
      <HeadingBlack>
        Our<HeadingYellow>Funitures</HeadingYellow>
      </HeadingBlack>
      <Grid>
        {products.map((it) => {
          return (
            <GridI>
              <FurnitureUtil
                key={it._id}
                uniqueId={it._id}
                name={it.productName}
                price={it.price}
                code={it.code}
                islogged={islogged}
                addToCart={addToCart}
              />
            </GridI>
          );
        })}
      </Grid>
    </Wrap>
  );
};

export default Furnitures;

const Wrap = styled.div`
  padding-top: 30px;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
`;

const HeadingBlack = styled.h1`
  width: 100%;
  float: left;
  font-size: 45px;
  color: #121010;
  font-weight: 700;
`;

const HeadingYellow = styled.span`
  background-color: #fee421;
  color: #fff;
  padding: 0px 5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
`;

const GridI = styled.div`
  background-color: rgba(255, 255, 255, 1);
  padding: 20px;
  text-align: center;
`;
