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
        backgroundColor: "#d3c7c7ff",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
