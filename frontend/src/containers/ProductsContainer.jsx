import { Box } from "@mui/material";

import colors from "../theme/colors";

const ProductsContainer = ({ children, sx = {} }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default ProductsContainer;
