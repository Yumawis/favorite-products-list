import MainContainer from "../containers/MainContainer";
import ProductCard from "../components/cards/ProductCard";
import CustomButton from "../components/buttons/CustomButton";

import { Box, Typography } from "@mui/material";
import { useGetAllProductsQuery } from "../services/productService";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ROUTES } from "../constants/navigateRoutes";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const {
    data: products,
    isLoading,
    refetch,
  } = useGetAllProductsQuery(user?.id, {
    skip: !user?.id,
  });

  const handleLogout = () => {
    navigate(ROUTES.LOGIN, { replace: true });
  };

  useEffect(() => {
    if (location.state?.id) {
      setUser({ id: location.state?.id, nickname: location.state?.nickname });
    }
  }, [location.state]);

  useEffect(() => {
    if (user?.id) {
      refetch();
    }
  }, [location.pathname, user?.id, refetch]);

  return (
    <MainContainer
      sx={{
        gap: "15px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textWrap: "nowrap",
              fontWeight: "600",
            }}
          >
            Usuario: {user?.nickname}
          </Typography>

          <CustomButton
            sx={{
              backgroundColor: "#8436c9ff",
              "&:hover": { backgroundColor: "#5e258fff" },
            }}
            onClick={handleLogout}
          >
            Cerrar Sesión
          </CustomButton>
        </Box>

        <Typography variant="h4" fontWeight={600}>
          Productos
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "center",
          }}
        >
          {products?.map((currentProduct, index) => (
            <ProductCard
              key={index}
              product={currentProduct}
              userId={user?.id}
            />
          ))}
        </Box>
      </Box>
    </MainContainer>
  );
};

export default Products;
