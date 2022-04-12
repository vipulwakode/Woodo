import React, { useState } from 'react';
import styled from 'styled-components';
import AddresUtil from './AddresUtil';

const Profile = ({
  user,
  orders,
  address,
  addressDefaultChange,
  addAddress,
  addressDelete,
}) => {
  const [toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState({
    flat: '',
    line1: '',
    line2: '',
  });

  const onSubmitHandle = async () => {
    var f = await addAddress(formData);
    if (f === true) {
      setFormData({
        flat: '',
        line1: '',
        line2: '',
      });
    }
  };

  const onChange = (e) => {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleHandle = () => {
    setToggle(!toggle);
  };
  return (
    <Wraper>
      <InfoBox>
        <div>
          <div>
            <span>First Name: </span>
            {user.firstName}
          </div>
          <div>
            <span>Last Name: </span>
            {user.lastName}
          </div>
          <div>
            <span>Email: </span>
            {user.email}
          </div>
        </div>
        <SeclectionBox>
          <UnderLinedDiv>My Adresses</UnderLinedDiv>
        </SeclectionBox>
      </InfoBox>
      <Contains>
        {toggle ? (
          <div>
            {address.length <= 6 ? (
              <AddressAdd>
                <Section>
                  <span>Flat No.: </span>
                  <input
                    type='text'
                    name='flat'
                    autocomplete='off'
                    value={formData.flat}
                    onChange={(e) => {
                      onChange(e);
                    }}
                    required
                  />
                </Section>
                <Section>
                  <span>Line 1: </span>
                  <input
                    type='text'
                    name='line1'
                    value={formData.line1}
                    onChange={(e) => {
                      onChange(e);
                    }}
                    required
                  />
                </Section>
                <Section>
                  <span>Line 2: </span>
                  <input
                    type='text'
                    name='line2'
                    value={formData.line2}
                    onChange={(e) => {
                      onChange(e);
                    }}
                    required
                  />
                </Section>
                <Section>
                  <CustomBtn onClick={onSubmitHandle}>Add</CustomBtn>
                </Section>
              </AddressAdd>
            ) : (
              ''
            )}
            {address.length === 0 ? (
              <ErrorBox>No Addresses Added ...</ErrorBox>
            ) : (
              <>
                {' '}
                {address.map((address) => {
                  return (
                    <AddresUtil
                      address={address}
                      addressDefaultChange={addressDefaultChange}
                      addressDelete={addressDelete}
                    />
                  );
                })}
              </>
            )}
          </div>
        ) : (
          ''
        )}
      </Contains>
    </Wraper>
  );
};

export default Profile;

const Wraper = styled.div`
  height: 100vh;
  width: 100%;
`;

const InfoBox = styled.div`
  margin: 10px auto;
  width: 40%;
  div {
    color: black;
    margin-bottom: 10px;
  }

  span {
    color: black;
    padding: 10px;
    padding-right: 10px;
  }
`;

const ErrorBox = styled.div`
  width: 100%;
  color: black;
  padding-top: 100px;
  font-size: 30px;
  margin: auto;
`;

const SeclectionBox = styled.div`
  text-align: center;
`;

const UnderLinedDiv = styled.div`
  border-bottom: 2px solid #fabe1c;
  padding-bottom: 5px;
  font-size: 22px;
  font-weight: bold;
`;

const Contains = styled.div`
  text-align: center;
  div {
    overflow: auto;
  }
`;

const AddressAdd = styled.div`
  margin: 10px auto;
  text-align: center;
`;

const Section = styled.div`
  padding: 10px 0;

  input {
    font-size: 22px;
    background-color: transparent;
    border: none;
    color: black;
    border-bottom: 2px solid #121010;
  }

  input:focus {
    outline: none;
  }

  span {
    padding-right: 20px;
    color: black;
  }
`;

const CustomBtn = styled.button`
  background-color: black;
  border-radius: 5px;
  padding: 10px;
  margin-left: 20px;
  cursor: pointer;
`;
