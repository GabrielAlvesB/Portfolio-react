import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage.jsx';
import Home from './routes/Home.jsx';
import Galeria from './routes/Galeria.jsx';
import Certificados from './routes/certificados.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "certificados",
        element: <Certificados/>
      },
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
