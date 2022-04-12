import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';

const AddresUtil = ({ address, addressDefaultChange, addressDelete }) => {
  const clickHandle = () => {
    const id = address._id;
    addressDefaultChange(id);
  };

  const deleteHandle = () => {
    const id = address._id;
    addressDelete(id);
  };

  return (
    <Wrap>
      <div>
        <input
          type='radio'
          name='address'
          checked={address.isDefault === 1}
          onChange={() => clickHandle()}
          value='HTML'
        ></input>
        <label>
          {address.flat}, {address.line1}, {address.line2}
        </label>
      </div>
      <span onClick={() => deleteHandle()}>
        <DeleteIcon />
      </span>
    </Wrap>
  );
};

export default AddresUtil;

const Wrap = styled.div`
  border: 1px solid black;
  padding: 10px;
  max-width: 60%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  span {
    background-color: #fabe1c;
    cursor: pointer;
  }
  label {
    color: black;
    padding-left: 20px;
  }
`;
