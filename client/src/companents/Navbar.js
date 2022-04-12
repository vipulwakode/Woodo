import React from 'react';
import styled from 'styled-components';
import PersonIcon from '@material-ui/icons/Person';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';

const Navbar = ({ user, logout, islogged }) => {
  return (
    <Container>
      <Link to='/'>
        <img src='/images/logo.png' alt='woodo' />
      </Link>

      <Menu>
        <Link to='/aboutus'>about</Link>
        <Link to='/furnitures'>Furnitures</Link>
        {islogged ? <Link to='/profile'>Profile</Link> : ''}
      </Menu>

      <Authenticate>
        <PersonIcon />
        {user.firstName ? (
          <div onClick={logout}>Hi,{user.firstName}</div>
        ) : (
          <Link to='/register'>
            <div>Login / Register</div>
          </Link>
        )}
      </Authenticate>

      <Cart>
        {islogged ? (
          <Link to='/Cart'>
            <LocalMallIcon />
          </Link>
        ) : (
          ''
        )}
      </Cart>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  color: #ffffff;
  min-height: 15vh;
  background-color: #fabe1c;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: normal;
    padding: 0 30px;
    flex-wrap: nowrap;
    transition: color 0.5s;
    font-size: 18px;
  }

  a:hover {
    color: #121010;
  }
`;

const Authenticate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    cursor: pointer;
    text-transform: capitalize;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      font-size: 18px;
      padding: 0 10px;
    }
  }
`;

const Cart = styled.div``;
