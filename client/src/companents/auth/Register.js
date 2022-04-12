import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Register = () => {
  const [InfoData, setInfoData] = useState({
    fname: '',
    lname: '',
    email: '',
    pass: '',
  });

  const { fname, lname, email, pass } = InfoData;

  const onChange = (e) => {
    return setInfoData({ ...InfoData, [e.target.name]: e.target.value });
  };

  //register api Hit
  const clickHandler = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: InfoData.fname,
        lastName: InfoData.lname,
        email: InfoData.email,
        password: InfoData.pass,
      }),
    };

    const res = await fetch('http://localhost:5000/register/', requestOptions);
    const data = await res.json();

    if (
      data === '"firstName" is not allowed to be empty' ||
      data === '"lastName" is not allowed to be empty' ||
      data === '"email" is not allowed to be empty' ||
      data === '"password" length must be at least 6 characters long' ||
      data === 'Email already exists' ||
      data === '"email" must be a valid email' ||
      data === '"password" is not allowed to be empty'
    ) {
      alert(data);
      return;
    }

    alert('Registration successful');
    window.location.href = 'http://localhost:3000/login';
  };

  return (
    <Wrap>
      <Contain>
        <h4>Register</h4>
        <Section>
          <span>First Name: </span>
          <input
            type='text'
            id='fname'
            value={fname}
            onChange={(e) => {
              onChange(e);
            }}
            name='fname'
            autoComplete='off'
            required
          />
        </Section>
        <Section>
          <span>Last Name: </span>
          <input
            type='text'
            id='fname'
            name='lname'
            value={lname}
            onChange={(e) => {
              onChange(e);
            }}
            autoComplete='off'
            required
          />
        </Section>
        <Section>
          <span>Email: </span>
          <input
            type='email'
            id='fname'
            name='email'
            value={email}
            onChange={(e) => {
              onChange(e);
            }}
            autoComplete='off'
            required
          />
        </Section>
        <Section>
          <span>Password: </span>
          <input
            type='password'
            id='fname'
            value={pass}
            onChange={(e) => {
              onChange(e);
            }}
            name='pass'
            autoComplete='off'
            required
          />
        </Section>
        <Section>
          <CustomBtn onClick={clickHandler}>Register</CustomBtn>
        </Section>
        <SectionList>
          <div>
            Already signed In?<Link to='/login'>Click here</Link>
          </div>
        </SectionList>
      </Contain>
    </Wrap>
  );
};

export default Register;

const Wrap = styled.div`
  height: 71vh;
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
