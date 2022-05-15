import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { Home } from "./pages/home";
import { Admin } from "./pages/admin";
import { Login } from "./pages/login";

  
export  const SistemRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/admin" element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  