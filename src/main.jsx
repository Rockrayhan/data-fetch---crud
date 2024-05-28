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
import SingleProduct from './Components/SingleProduct.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import AddProduct from './pages/AddProduct.jsx';
import EditProduct from './pages/EditProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/home",
        element: <Home/>
      },
      {
        path:"",
        element: <AllProducts/>,
        loader: ()=> fetch("http://localhost:3000/bags")
      },
      {
        path:"/products/:id",
        element: <ProductDetails/>,
        loader: ({params})=> 
          fetch(`http://localhost:3000/bags/${params.id}`),
      },
      {
        path:"/dashboard",
        element: <Dashboard/>
      },
      {
        path:"/add-product",
        element: <AddProduct/>
      },
      {
        path:"/products/edit/:id",
        element: <EditProduct/>,
        loader: ({params})=> 
          fetch(`http://localhost:3000/bags/${params.id}`),
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
