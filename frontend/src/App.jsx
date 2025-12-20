import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Products from "./pages/products";

import { ROUTES } from "./constants/navigateRoutes";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.PRODUCTS} element={<Products />} />
      <Route path="*" element={<div>Not Found 404</div>} />
    </Routes>
  );
};

export default App;
