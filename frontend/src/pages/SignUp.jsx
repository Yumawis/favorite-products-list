import MainContainer from "../containers/MainContainer";

import CustomFlexCard from "../cards/CustomFlexCard";
import CustomTextInput from "../inputs/CustomTextInput";
import CustomNumberInput from "../inputs/CustomNumberInput";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import { Field, Form, Formik } from "formik";

import { useSignUpMutation } from "../services/authService";
import { ROUTES } from "../constants/navigateRoutes";

const SignUp = () => {
  const navigate = useNavigate();

  const [signUp, { data, error, isSuccess, isError, isLoading }] = useSignUpMutation();

  const handleSignUp = ({ names, lastNames, nickname, documentNumber }) => {
    signUp({ names, lastNames, nickname, documentNumber });
  };

  const handleBackToLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  useEffect(() => {
    if (isSuccess) {
      alert(data?.message);
      handleBackToLogin();
    }
    if (isError) alert(error?.data?.message);
  }, [data, isSuccess, isError]);

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
          <h1>Registrar</h1>

          <Formik
            initialValues={{
              names: "",
              lastNames: "",
              nickname: "",
              documentNumber: "",
            }}
            onSubmit={(values) => {
              handleSignUp(values);
            }}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form style={{ width: "100%" }}>
                <Field
                  as={CustomTextInput}
                  name="names"
                  label="Nombres"
                  value={values.names}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Field
                  as={CustomTextInput}
                  name="lastNames"
                  label="Apellidos"
                  sx={{ marginTop: "15px" }}
                  value={values.lastNames}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Field
                  as={CustomTextInput}
                  name="nickname"
                  label="Nickname"
                  sx={{ marginTop: "15px" }}
                  value={values.nickname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Field
                  as={CustomNumberInput}
                  name="documentNumber"
                  label="Número de documento"
                  sx={{ marginTop: "15px" }}
                  value={values.documentNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ marginTop: "20px" }}
                  disabled={isLoading}
                >
                  {!isLoading ? "Registrarse" : "Cargando..."}
                </Button>

                <Box sx={{ marginTop: "15px", textAlign: "center" }}>
                  <Typography variant="body2">
                    ¿Ya tienes cuenta?{" "}
                    <Typography
                      component="span"
                      color="primary"
                      sx={{ cursor: "pointer", fontWeight: 600 }}
                      onClick={handleBackToLogin}
                    >
                      Inicia sesión
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

export default SignUp;
