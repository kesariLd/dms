
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App";

import LoginUser from "./components/Login/LoginUser";

import RegisterUser from "./components/Register/RegisterUser";

import './index.css'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<App />}/>
    <Route path ="/login" element={<LoginUser/>} />
    <Route path ="/register" element={<RegisterUser/>} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
)