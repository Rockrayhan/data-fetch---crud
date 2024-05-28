import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import AllProducts from './pages/AllProducts.jsx';
import Dashboard from './pages/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"",
        element: <Home/>
      },
      {
        path:"/all-products",
        element: <AllProducts/>,
        loader: ()=> fetch("http://localhost:3000/bags")
      },
      {
        path:"/dashboard",
        element: <Dashboard/>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
