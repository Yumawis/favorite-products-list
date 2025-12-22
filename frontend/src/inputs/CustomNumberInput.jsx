import { TextField } from "@mui/material";

const CustomNumberInput = ({ ...props }) => {
  return <TextField type="number" fullWidth border="outlined" {...props} />;
};

export default CustomNumberInput;
