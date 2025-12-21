import MainContainer from "../containers/MainContainer";

import CustomFlexCard from "../components/cards/CustomFlexCard";
import CustomTextInput from "../inputs/CustomTextInput";
import CustomNumberInput from "../inputs/CustomNumberInput";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import { Field, Form, Formik } from "formik";

import { useSignUpMutation } from "../services/authService";
import { ROUTES } from "../constants/navigateRoutes";

import CustomLink from "../components/CustomLink";
import CustomButton from "../components/buttons/CustomButton";

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
    <MainContainer sx={{ height: "100vh" }}>
      <Box
        sx={{
          width: "530px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
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
              <Form>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
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
                    value={values.lastNames}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Field
                    as={CustomTextInput}
                    name="nickname"
                    label="Nickname"
                    value={values.nickname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Field
                    as={CustomNumberInput}
                    name="documentNumber"
                    label="Número de documento"
                    value={values.documentNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <CustomButton type="submit" disabled={isLoading}>
                    {!isLoading ? "Registrarse" : "Cargando..."}
                  </CustomButton>

                  <Box sx={{ marginTop: "5px", textAlign: "center" }}>
                    <Typography variant="body2">
                      ¿Ya tienes cuenta?{" "}
                      <CustomLink path={ROUTES.LOGIN} text="Inicia Sesión"></CustomLink>
                    </Typography>
                  </Box>
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
