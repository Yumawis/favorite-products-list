// src/cards/ProductCard.jsx
import { Box } from "@mui/material";

const ProductCard = ({ children, sx = {} }) => {
  return (
    <Box
      sx={{
        width: "300px",
        minHeight: 420,
        display: "flex",
        flexDirection: "column",
        p: 2,
        gap: 1.5,
        borderRadius: 3,
        backgroundColor: "#fff",
        boxShadow: 3,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default ProductCard;
