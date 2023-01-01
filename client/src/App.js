import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import all components
import Login from './components/Login';
import Register from './components/Register';
import Password from './components/Password';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import Reset from './components/Reset';
import Recovery from './components/Recovery';
import './index.css';
// Root routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login></Login>,
  },
  {
    path: '/register',
    element: <Register></Register>,
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>,
  },
  {
    path: '/password',
    element: <Password></Password>,
  },
  {
    path: '/reset',
    element: <Reset></Reset>,
  },
  {
    path: '/profile',
    element: <Profile></Profile>,
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>,
  },
]);

const App = () => {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
};

export default App;
