import { Box, IconButton, Rating, Typography } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = ({ product, sx = {} }) => {
  return (
    <Box
      sx={{
        minWidth: "300px",
        minHeight: "320px",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        gap: 1.5,
        borderRadius: 3,
        backgroundColor: "#ffffff",
        boxShadow: 3,
        ...sx,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f2f2f2",
          borderRadius: 2,
        }}
      />
      <Typography variant="h6">{product?.name}</Typography>

      <Typography color="text.secondary">
        Stock: {product?.status === "No disponible" ? 0 : product?.stock}
      </Typography>

      <Typography color="text.secondary">Status: {product?.status}</Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        <Rating value={0} readOnly size="small" />

        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductCard;
