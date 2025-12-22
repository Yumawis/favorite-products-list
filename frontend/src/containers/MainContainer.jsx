import { Box } from "@mui/material";

const MainContainer = ({ children, sx = {} }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
