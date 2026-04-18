import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './Roots/Roots';
import Home from './pages/Home/Home';
import Books from './pages/books/Books';
import ReadePage from './pages/ReadePage/ReadePage';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Roots,
    children:[
      {index:true,Component:Home,},
      {
        path:"book",
        Component:Books,
      },
      {
        path:"reade",
        Component:ReadePage,
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
