import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root'
import App from './App'
import Trending from './components/Trending'
import Login from './components/Login'
import Signup from './components/Signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/trending",
        element: <Trending />
      },
    ]
  },
  {
    path: "/login",
    element: <Root />,
    children: [
      {
        path:"/login",
        element: <Login />
      }
    ]
  },
  {
    path: "/sign-up",
    element: <Root />,
    children: [
      {
        path:"/sign-up",
        element: <Signup />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
