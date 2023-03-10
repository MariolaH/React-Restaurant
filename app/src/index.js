import React from 'react';
import ReactDOM from 'react-dom/client';
import Mainpage from './components/Mainpage';
import Menupage from './components/Menupage';
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Drinks from './components/Drinks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
  {
    path: "/menupage",
    element: <Menupage />,
  },
   {
    path: "/drinks",
    element: <Drinks />
  }
  // {
  //   path: "/breakfast",
  //   element: <Menupage />,
  // },
  // {
  //   path: "/lunch",
  //   element: <Menupage />,
  // },
  // {
  //   path: "/dinner",
  //   element: <Menupage />,
  // },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
