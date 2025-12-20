import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../services/authService";

import { Box, Button, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";

import { ROUTES } from "../constants/navigateRoutes";

import MainContainer from "../containers/MainContainer";
import CustomFlexCard from "../cards/CustomFlexCard";
import CustomNumberInput from "../inputs/CustomNumberInput";

const Login = () => {
  const navigate = useNavigate();

  const [login, { data, error, isSuccess, isError, isLoading }] = useLoginMutation();

  const handleLogin = (documentNumber) => {
    login({ documentNumber });
  };

  const handleGoToSignUp = () => {
    navigate(ROUTES.SIGN_UP);
  };

  useEffect(() => {
    if (isSuccess) navigate(ROUTES.PRODUCTS);
    if (isError) alert(error?.data?.message);
  }, [data, error, isSuccess, isError]);

  return (
    <MainContainer>
      <Box
        sx={{
          width: "530px",
          display: "flex",
          flexDirection: "column",
          gap: "45px",
        }}
      >
        <CustomFlexCard>
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
                      onClick={handleGoToSignUp}
                    >
                      Regístrate
                    </Typography>
                  </Typography>
                </Box>
              </Form>
            )}
          </Formik>
        </CustomFlexCard>
      </Box>
    </MainContainer>
  );
};

export default Login;
