import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <FullWrap>
      <Wrap>
        <HeadingBlack>
          About<HeadingYellow>Us</HeadingYellow>
        </HeadingBlack>
        <Motto>Giving you the Best Furnitures we can.</Motto>
        <BgImage>
          <InfoContainer>
            <Para>
              While picking the furniture for your living and lounge area, it’s
              imperative to pick immortal, practical pieces that fit your space
              and spending plan! Browse contemporary and present-day, customary
              or a touch of both in a one-of-a-kind diverse blend – there are no
              principles, so don’t be reluctant to get innovative and purchase
              furniture you love.
            </Para>

            <ImageCont>
              <img src='/images/about-img.png' height='700px' alt='table' />
            </ImageCont>
          </InfoContainer>
        </BgImage>
      </Wrap>
    </FullWrap>
  );
};

export default AboutUs;

const FullWrap = styled.div`
  box-sizing: border-box;
  padding-top: 40px;
  height: 100vh;
`;

const Wrap = styled.div`
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

const Motto = styled.div`
  width: 100%;
  float: left;
  font-size: 17px;
  color: #0d0909;
  padding: 10px 0;
  margin-left: 0px;
  margin-top: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ImageCont = styled.div`
  
    position: relative;
    top: -130px;
}
`;

const Para = styled.p`
  max-width: 50%;
  max-height: inherit;
  float: left;
  color: #f7f3f3;
  font-size: 18px;
  padding-top: 80px;
`;

const BgImage = styled.div`
  height: 50vh;
  width: 100%;
  float: left;
  background-image: url('/images/about-bg.png');
  height: auto;
  background-size: 100%;
  background-repeat: no-repeat;
`;
