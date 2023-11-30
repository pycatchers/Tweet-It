import { render } from '@testing-library/react';
import Posts from './components/functionalcomponents/Posts';
import UserContext from './components/functionalcomponents/userContext';
import LoginForm from './components/functionalcomponents/LoginForm';

const userData = {
  userName: 'David',
  email: 'david@abc.com',
}

function App() {
  return (
    <>
    <UserContext.Provider value={userData}>
      <Posts />
    </UserContext.Provider>
    <LoginForm />
    </>
  )
}

export default App;
