import { render } from '@testing-library/react';
import Posts from './components/functionalcomponents/Posts';
import UserContext from './components/functionalcomponents/userContext';
import LoginForm from './components/functionalcomponents/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/functionalcomponents/HomePage';
import PostDetail from './components/functionalcomponents/PostDetail';
import NotFoundPage from './components/functionalcomponents/NotFoundPage';
import Login from './components/functionalcomponents/Login';

const userData = {
  userName: 'David',
  email: 'david@abc.com',
}

function App() {
  return(

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/posts/:id' element={<PostDetail />} />
        <Route path='/login' element={ <Login /> } />
        <Route path='*' element={ <NotFoundPage /> }/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App;
