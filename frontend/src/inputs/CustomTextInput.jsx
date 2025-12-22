import { TextField } from "@mui/material";

const CustomTextInput = ({ ...props }) => {
  return <TextField type="text" fullWidth border="outlined" {...props} />;
};

export default CustomTextInput;
