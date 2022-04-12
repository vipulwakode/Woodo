import React from 'react';
import styled from 'styled-components';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Wrap>
      <Menu>
        <Link to='/'>Home</Link>
        <Link to='/aboutus'>about</Link>
        <Link to='/furnitures'>Furnitures</Link>
        <Link to='/profile'>Profile</Link>
      </Menu>
      <ContactInfo>
        <InfoBox>
          <LocationOnIcon />
          <p>Address</p>
        </InfoBox>
        <InfoBox>
          <MailIcon />
          <p>mail</p>
        </InfoBox>
        <InfoBox>
          <PhoneIcon />
          <p>Phone</p>
        </InfoBox>
      </ContactInfo>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #303330;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    padding: 0 20px;
    transition: color 0.5s;
  }

  a:hover {
    color: #f6a50e;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    padding: 0 20px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;

  p {
    padding: 0 5px;
  }
`;
