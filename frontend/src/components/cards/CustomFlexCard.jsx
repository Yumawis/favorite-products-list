import { Box } from "@mui/material";

const CustomFlexCard = ({ children, sx = {} }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "15px",
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

export default CustomFlexCard;
