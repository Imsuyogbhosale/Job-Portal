// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/home/Home';
import Jobs from './components/jobs/Jobs';
import Browser from './components/browse/Browser';


const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/Login',
    element : <Login/>
  },
  {
    path : '/Signup',
    element : <Signup/>
  },
  {
    path : '/Jobs',
    element : <Jobs/>
  },
  {
    path : '/Browser',
    element : <Browser/>
  }
])
const App = () => {
  return (
   <div>
     <RouterProvider router={appRouter}/>
   </div>
  );
}

export default App;
