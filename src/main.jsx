import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Coffee from './components/Coffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import AuthProvide from './context/AuthProvide.jsx'
import Users from './components/Users.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/coffee',
    element: <Coffee></Coffee>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: '/updateCoffe/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>,
  },
  {
    path: '/singup',
    element: <SignUp></SignUp>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvide>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvide>
  </React.StrictMode>,
)
