import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  maxHeight: "45px",
  padding: "0.9em 0.95em",
  fontSize: "16px",
  borderRadius: "0.3rem",
  fontFamily: "'Fjalla One', system-ui",
  transition: "all 0.3s ease",

  "&.Mui-disabled": {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
    cursor: "not-allowed",
  },
}));

const CustomButton = ({ children, disabled = false, sx = {}, ...props }) => {
  return (
    <StyledButton
      disabled={disabled}
      sx={{
        backgroundColor: "#1E88E5",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#1565C0",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
