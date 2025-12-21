import MainContainer from "../containers/MainContainer";
import ProductCard from "../components/cards/ProductCard";

import { Box, Typography } from "@mui/material";
import { useGetAllProductsQuery } from "../services/productService";
import { useEffect } from "react";

const Products = () => {
  const { data: products, isLoading } = useGetAllProductsQuery();

  return (
    <MainContainer>
      <Typography variant="h4" fontWeight={600} sx={{ mb: 4 }}>
        Productos
      </Typography>
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
            <ProductCard key={index} product={currentProduct} />
          ))}
        </Box>
      </Box>
    </MainContainer>
  );
};

export default Products;
