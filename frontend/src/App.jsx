import { useState } from "react";

import ProductContainer from "./containers/ProductContainer";
import Login from "./pages/Login";
import Register from "./pages/register";

import { Box } from "@mui/material";

const App = () => {
  const [view, setView] = useState("login");

  return (
    <ProductContainer>
      <Box
        sx={{
          width: "530px",
          display: "flex",
          flexDirection: "column",
          gap: "45px",
        }}
      >
        {view === "login" && <Login onGoToRegister={() => setView("register")} />}
        {view === "register" && <Register onGoToLogin={() => setView("login")} />}
      </Box>
    </ProductContainer>
  );
};

export default App;
