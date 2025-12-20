import { Box } from "@mui/material";

const ProductContainer = ({ children, sx = {} }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d3c7c7ff",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
//
export default ProductContainer;
