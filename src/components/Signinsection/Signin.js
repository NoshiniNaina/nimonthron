import React, { useContext, useState } from 'react';
import "./index.css";
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router';
import styled from "styled-components";
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn,handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './SigninManager';
import bgImg from "../../images/two.jpg";



function Signin() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });
  initializeLoginFramework()
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const history= useHistory();
  const location= useLocation();
  let {from } = location.state || {from: {pathname: "/profile"}};

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleresponse(res,true);
      })
  }
  const fbSignIn = () => {
    handleFbSignIn()
    .then(res => {
      handleresponse(res,true);
    })
  }
  const signOut= () => {
    handleSignOut()
    .then(res => {
      handleresponse(res,false);
    })
  }
  const handleresponse = (res,redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
      //history.replace(from);
      history.push('/profile')
    }
  }
  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name,user.email,user.password)
      .then(res => {
        handleresponse(res,true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email,user.password)
      .then(res => {
        handleresponse(res,true);
      })
    }

    e.preventDefault();
  }

  

  return (
    <Container1>
    <Wrapper>
      <Container>
        
        {/* { user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
          <button onClick={googleSignIn}>Sign In</button>
        } */}
        <Container2>
            <button onClick={googleSignIn}>Sign In  using Google</button>
            <br/>
            <button onClick={fbSignIn}>Sign In using Facebook</button> 
        </Container2>
        {/* {
          user.isSignedIn && 
          <div>
            <p>Welcome, {user.name}</p>
            <p>Your email: {user.email}</p>
            <img src={user.photo} alt=""/>
          </div>
        } */}
        <br/>
        <button onClick={() => setNewUser(!newUser)} name="newUser" id="" >Sign up</button>
        <Form onSubmit={handleSubmit}>
          {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name"/>}
          <br/>
          <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
          <br/>
          <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
          <br/>
          <input type="submit" value={newUser ? 'Submit' : 'Sign in'}/>
        </Form>
        <div>
          <Terms>
            By signing up, I agree to the Privacy Policy <br /> and Terms of
            Service
          </Terms>
        </div>
        
      </Container>
      </Wrapper>
    </Container1>
    
  );
}
const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h3{
    margin-top: 100px;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: white;
      cursor: pointer;
    }
  }
`;
const Container1 = styled.div`
  background: Black;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Container2 = styled.div`
  margin-top: 90px;
`;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  -o-object-fit: cover;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;

`;

export default Signin;