import { Box } from "@mui/material";

const CustomFlexCard = ({ children, sx = {} }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px",
        gap: "20px",
        borderRadius: "1rem",
        background: "#ffffff",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CustomFlexCard;
