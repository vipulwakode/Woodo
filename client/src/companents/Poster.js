import React from 'react';
import styled from 'styled-components';

const Poster = () => {
  return (
    <div>
      <Wrap>
        <BoldLetters>
          <BlackBold>2021</BlackBold>
          <WhiteBold>TRENDS</WhiteBold>
          <BlackBold>FURNITURE</BlackBold>
          <Info>
            The furniture in a house resembles the meat and potatoes of a
            dinner. Our furniture takes up the dominant part of the room and
            helps make your home feel lived in, inviting, and finish.
          </Info>
        </BoldLetters>
        <img src='/images/img-1.png' alt='table' />
      </Wrap>
    </div>
  );
};

export default Poster;

const Wrap = styled.div`
  height: 85vh;
  width: 100%;
  background-color: red;
  background-image: url('/images/banner-bg.png');
  display: flex;
  justify-content: space-around;
`;

const BoldLetters = styled.div`
  align-items: left;
  padding: 0 25px;
`;

const BlackBold = styled.div`
  margin: 15px 0;
  align-items: left;
  width: 100%;
  font-size: 84px;
  color: #060a0b;
  font-weight: bold;
`;

const WhiteBold = styled.div`
  align-items: left;
  width: 100%;
  font-size: 84px;
  color: #ffffff;
  font-weight: bold;
`;

const Info = styled.p`
  max-width: inherit;
  line-height: 1.3;
  font-size: 22px;
`;
