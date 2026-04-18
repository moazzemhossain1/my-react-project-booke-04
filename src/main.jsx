import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './Roots/Roots';
import Home from './pages/Home/Home';
import Books from './pages/books/Books';
import ReadePage from './pages/ReadePage/ReadePage';
import ErrorePage from './pages/Errore/ErrorePage';
import SingleBokDitles from './pages/singleBokeDitles/singleBokDitles';

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
      },
      {
        path:"bokeDitles/:id",
        loader:async ({params }) =>{
          const res=await fetch('/booksData.json');
          const data=await res.json();
          console.log("moazzem ",data);
            const singleData = data.find(book => book.bookId == Number(params.id));
   
        return singleData;
        },
        Component:SingleBokDitles,
      }
    ],
    errorElement:<ErrorePage></ErrorePage>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
