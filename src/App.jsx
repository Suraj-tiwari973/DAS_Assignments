import React from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Acheivements from './pages/Acheivements';
import Education from './pages/Education'
import Introduction from './pages/Intoduction';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Introduction/>
  },
  {
    path: "/acheivements",
    element: <Acheivements/>
  },
  {
    path: "education",
    element: <Education/>
  },
])

export default function App() {
  return (
    <>
    <div>
      <RouterProvider router = {router}/>
    </div>
    </>
  )
}
