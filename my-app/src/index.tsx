import * as React from "react";
import * as ReactDOM from "react-dom/client";

// react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';

// importinng componennts
import Patient from "./components/Patient";

// route
const router = createBrowserRouter([
  {
    path: "/",
    element: <div><h1>Pages</h1><br/>
      /patient, <br/>
      /app, <br/>
    </div>,
  },
  {
    path: "patient",
    element: <Patient idProp="d2773336-f723-11e9-8f0b-362b9e155667" />

  },
  {
    path: "app",
    element: <App  />
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


