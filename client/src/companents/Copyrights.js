import React from 'react';
import styled from 'styled-components';

const Copyrights = () => {
  return (
    <Wrap>
      <Info>Copyright &copy; 2022 All Rights Reserved by Vipul Wakode</Info>
    </Wrap>
  );
};

export default Copyrights;

const Wrap = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #fec40c;
  text-align: center;
`;

const Info = styled.p`
  padding: 25px 0;
`;
