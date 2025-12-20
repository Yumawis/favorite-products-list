import MainContainer from "../containers/MainContainer";
import ProductCard from "../cards/ProductCard";
import { Box, IconButton, Rating, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Products = () => {
  return (
    <MainContainer>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={600}>
          Productos
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          maxWidth: "1200px",
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCard key={index}>
            {/* Imagen */}
            <Box
              sx={{
                width: "100%",
                height: 140,
                backgroundColor: "#f2f2f2",
                borderRadius: 2,
              }}
            />

            {/* Nombre */}
            <Typography variant="h6">Nombre del producto</Typography>

            {/* Stock */}
            <Typography color="text.secondary">Stock: --</Typography>

            {/* Disponibilidad */}
            <Typography color="text.secondary">--</Typography>

            {/* Rating + Favoritos */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: "auto",
              }}
            >
              <Rating value={0} readOnly size="small" />

              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
          </ProductCard>
        ))}

        {/* <ProductCard>
          <Typography variant="h6">Producto A</Typography>
          <Typography color="text.secondary">Stock: 10</Typography>
          <Typography color="success.main">Disponible</Typography>
        </ProductCard>

        <ProductCard>
          <Typography variant="h6">Producto B</Typography>
          <Typography color="text.secondary">Stock: 0</Typography>
          <Typography color="error.main">Sin stock</Typography>
        </ProductCard>

        <ProductCard>
          <Typography variant="h6">Producto B</Typography>
          <Typography color="text.secondary">Stock: 0</Typography>
          <Typography color="error.main">Sin stock</Typography>
        </ProductCard> */}
      </Box>
    </MainContainer>
  );
};

export default Products;
