import React from 'react';
import styled from 'styled-components';
import image from '../assets/image.png';
import image2 from '../assets/eyeicon.png';
import PasswordInput from './PasswordInput';
const LoginScreen = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt="Login" />
      </ImageContainer>
      <LoginForm>
        <Title>Login</Title>
        <Label for="loginid">Login ID</Label><br/>
        <LoginContainer>
        <LoginInput type="text" placeholder="Enter Login Id" id="loginid"/><br/>
        </LoginContainer>
        <Label for="password">Password</Label><br/>
        <PasswordInput/>
        <Div className="checkbox-flex">
            <div className="checkbox">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox" style={style}>Remember me</label>
            </div>
            <Span style={style2}>change password</Span>
           </Div>
        <input type="checkbox" id="checkbox1" />
        <label for="checkbox1" style={style} >Agree to <Span>Terms & Conditions</Span></label>
        <Button>Login</Button>
        <P>Don't have an account?<Span style={style3}>Register Here</Span></P>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

const LoginForm = styled.div`
  flex: 1;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px #000000;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 20px 0;
  text-align:center;
`;
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom:20px;
  margin-top:10px;
`;
const LoginInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  outline: none;
  
`;
const Input = styled.input`
  width:100%;
  padding: 10px;
  margin: 15px 0px;
  margin-right:10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const Label = styled.label`
   text-align:left;
`;
const Div = styled.div`
 display:flex;
 justify-content:space-between;
 margin-bottom:15px;
`;
const Span = styled.span`
    color: #F78719;
    text-decoration:underline;
`;
const style = {
    color:'#737B86',
    fontWeight:'400',
    margin: '10px'
}

const style2 = {
    textDecoration:'none',
    textAlign:'right'
}
const style3 = {
    fontWeight:'bold'
}
const P = styled.p`
  text-align:center;
`;

const Button = styled.button`
  width: 80%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  margin-top:20px;
  margin-left:10%;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default LoginScreen;
