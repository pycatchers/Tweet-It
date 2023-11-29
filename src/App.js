<<<<<<< HEAD
import { render } from '@testing-library/react';
import Posts from './components/functionalcomponents/Posts';
import UserContext from './components/functionalcomponents/userContext';
import LoginForm from './components/functionalcomponents/LoginForm';

const userData = {
  userName: 'David',
  email: 'david@abc.com',
}

function App() {
=======
import Component from "react";
import { useState } from "react";
import TweetContainer from "./components/TweetContainer";
import TweetContainerClass from "./classComponents/TweetContainerClass";
//import StudentsList from './components/StudentsList';
>>>>>>> bfc6f8ba0452e0a11ef19c67f9fb129f174313ef

function App() {
  return (
    <>
<<<<<<< HEAD
    <UserContext.Provider value={userData}>
      <Posts />
    </UserContext.Provider>
    <LoginForm />
    </>
  )
=======
      Functional Component TweetIt
      <TweetContainer />
      <br />
      Class Component TweetIt
      <TweetContainerClass />
    </>
  );
>>>>>>> bfc6f8ba0452e0a11ef19c67f9fb129f174313ef
}

export default App;
