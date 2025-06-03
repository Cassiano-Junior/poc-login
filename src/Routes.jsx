import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Login} from './pages/Login'
import {Dashboard} from './pages/Dashboard'
import { Navigate } from 'react-router';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: '*', // rota coringa
    element: <Navigate to="/" replace />,
  },
]);

export function Routes() {
  return  <RouterProvider router={router} />
}