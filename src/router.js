import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { Home } from "./pages/home";
import { Admin } from "./pages/admin";

  
export  const SistemRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Admin" element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  