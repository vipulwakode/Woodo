import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Login = () => {
  const [infoData, setInfoData] = useState({
    email: '',
    pass: '',
  });

  const { email, pass } = infoData;

  const onChange = (e) => {
    return setInfoData({ ...infoData, [e.target.name]: e.target.value });
  };

  const clickHandler = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: infoData.email,
        password: infoData.pass,
      }),
    };

    const res = await fetch('http://localhost:5000/login', requestOptions);
    const data = await res.json();

    if (
      data === 'Invalid Credentials' ||
      data === '"password" length must be at least 6 characters long' ||
      data === '"email" must be a valid email' ||
      data === '"password" is not allowed to be empty'
    ) {
      alert(data);
      return;
    }

    localStorage.setItem('token', data);
    alert('Login successful');
    window.location.href = 'http://localhost:3000/';
  };

  return (
    <Wraper>
      Login
      <Contain>
        <h4>Login</h4>
        <Section>
          <span>Email: </span>
          <input
            type='email'
            id='fname'
            name='email'
            value={email}
            autoComplete='off'
            onChange={(e) => {
              onChange(e);
            }}
            autocomplete='off'
            required
          />
        </Section>
        <Section>
          <span>Password: </span>
          <input
            type='password'
            id='fname'
            value={pass}
            autoComplete='off'
            onChange={(e) => {
              onChange(e);
            }}
            name='pass'
            required
          />
        </Section>
        <Section>
          <CustomBtn onClick={clickHandler}>Login</CustomBtn>
        </Section>
        <SectionList>
          <div>
            New User?<Link to='/register'>Click here</Link>
          </div>
        </SectionList>
      </Contain>
    </Wraper>
  );
};

export default Login;

const Wraper = styled.div`
  height: 75vh;
  width: 100%;
`;
const Contain = styled.div`
  margin: 30px auto 0px auto;
  height: 50vh;
  width: 40%;
  background-color: #fabe1c;
  border-radius: 10px;
  box-shadow: 20px 20px 50px #997a00;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    font-size: 32px;
    color: #121010;
    padding-down: 10px;
  }
`;

const Section = styled.div`
  padding: 10px 0;

  input {
    font-size: 22px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #121010;
  }

  input:focus {
    outline: none;
  }

  span {
    padding-right: 20px;
  }
`;

const SectionList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    a {
      color: #121010;
    }
  }
`;

const CustomBtn = styled.button`
  background-color: black;
  border-radius: 5px;
  padding: 10px;
  margin-left: 20px;
  cursor: pointer;
`;
