import { Box } from "@mui/material";

const CustomLoginCard = ({ children, sx = {} }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px",
        gap: "25px",
        borderRadius: "1rem",
        background: "#ffffff",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CustomLoginCard;
