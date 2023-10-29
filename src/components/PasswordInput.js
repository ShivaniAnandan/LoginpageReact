import React, { useState } from 'react';
import styled from 'styled-components';
import image2 from '../assets/eyeicon.png';
const PasswordInput = () => {
  

  return (
    <Container>
      <Input
        type="password"
        placeholder="Enter Password"
      />
      <PasswordIcon>
      <img src={image2} alt="Eye Icon" /> 
      </PasswordIcon>

    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom:10px;
  margin-top:10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  outline: none;
`;

const PasswordIcon = styled.button`
  background: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

export default PasswordInput;
