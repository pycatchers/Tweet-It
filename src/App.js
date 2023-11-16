import Component from "react";
import { useState } from "react";
import TweetContainer from "./components/TweetContainer";
import TweetContainerClass from "./classComponents/TweetContainerClass";
//import StudentsList from './components/StudentsList';

function App() {
  return (
    <>
      Functional Component TweetIt
      <TweetContainer />
      <br />
      Class Component TweetIt
      <TweetContainerClass />
    </>
  );
}

export default App;
