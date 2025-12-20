import { useNavigate } from "react-router-dom";
import CustomLoginCard from "../cards/CustomLoginCard";
import CustomNumberInput from "../inputs/CustomNumberInput";

import { Box, Button, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useLoginMutation } from "../services/authService";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [login, { data, error, isSuccess, isError, isLoading }] = useLoginMutation();

  const handleLogin = (documentNumber) => {
    login({ documentNumber });
  };

  const handleRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    if (isSuccess) navigate("/products");
    if (isError) alert(error?.data?.message);
  }, [error, isSuccess, isError]);

  return (
    <CustomLoginCard>
      <h1>Login</h1>

      <Formik
        initialValues={{ documentNumber: "" }}
        onSubmit={(values) => {
          const documentNumber = values.documentNumber;
          handleLogin(documentNumber);
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form styled={{ width: "100%" }}>
            <Field
              as={CustomNumberInput}
              name="documentNumber"
              label="Número de documento"
              placeholder="Ingresa tu número de documento"
              value={values.documentNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Button type="submit" variant="contained" fullWidth sx={{ marginTop: "20px" }}>
              INICIAR SESIÓN
            </Button>

            <Box sx={{ marginTop: "15px", textAlign: "center" }}>
              <Typography variant="body2">
                ¿No estás registrado?{" "}
                <Typography
                  component="span"
                  color="#1E88E5"
                  sx={{ cursor: "pointer", fontWeight: 600 }}
                  onClick={handleRegister}
                >
                  Regístrate
                </Typography>
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </CustomLoginCard>
  );
};

export default Login;
