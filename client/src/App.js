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

// Auth Middleware
import { AuthorizeUser, ProtectRoute } from './middleware/auth';

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
    path: '/password',
    element: (
      <ProtectRoute>
        <Password />
      </ProtectRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <AuthorizeUser>
        <Profile />
      </AuthorizeUser>
    ),
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>,
  },
  {
    path: '/reset',
    element: <Reset></Reset>,
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
