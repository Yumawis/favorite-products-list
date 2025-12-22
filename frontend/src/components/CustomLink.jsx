import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const CustomLink = ({ path, text }) => {
  return (
    <Link
      component={RouterLink}
      to={path}
      sx={{ cursor: "pointer", fontWeight: 600, color: "#1E88E5" }}
    >
      {text}
    </Link>
  );
};

export default CustomLink;
