import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Coffee from './components/Coffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/coffee',
    element: <Coffee></Coffee>
  },
  {
    path: '/updateCoffe',
    element: <UpdateCoffee></UpdateCoffee>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
