import Login from "./pages/Login";
import Register from "./pages/register";
import Products from "./pages/products";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default App;
