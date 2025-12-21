import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../services/authService";

import { Box, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";

import { ROUTES } from "../constants/navigateRoutes";

import MainContainer from "../containers/MainContainer";
import CustomFlexCard from "../components/cards/CustomFlexCard";
import CustomNumberInput from "../inputs/CustomNumberInput";
import CustomButton from "../components/buttons/CustomButton";
import CustomLink from "../components/CustomLink";

const Login = () => {
  const navigate = useNavigate();

  const [login, { data, error, isSuccess, isError, isLoading }] = useLoginMutation();

  const isSubmitting = isLoading || isSuccess;

  const handleLogin = (documentNumber) => {
    login({ documentNumber });
  };

  useEffect(() => {
    if (isSuccess) navigate(ROUTES.PRODUCTS);
    if (isError) alert(error?.data?.message);
  }, [data, error, isSuccess, isError]);

  return (
    <MainContainer sx={{ height: "100vh", padding: "250px" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <CustomFlexCard>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Inicio de Sesión
          </Typography>

          <Formik
            initialValues={{ documentNumber: "" }}
            onSubmit={(values) => {
              const documentNumber = values.documentNumber;
              handleLogin(documentNumber);
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
                    sx={{ width: "100%" }}
                    as={CustomNumberInput}
                    name="documentNumber"
                    label="Número de documento"
                    placeholder="Ingresa tu número de documento"
                    value={values.documentNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <CustomButton
                    type="submit"
                    sx={{
                      backgroundColor: "#2d9c4bff",
                      "&:hover": { backgroundColor: "#33b339ff" },
                    }}
                    disabled={isSubmitting}
                  >
                    {!isSubmitting ? "Iniciar Sesión" : "Cargando..."}
                  </CustomButton>

                  <Box sx={{ marginTop: "5px", textAlign: "center" }}>
                    <Typography variant="body2">
                      ¿No estás registrado? <CustomLink path={ROUTES.SIGN_UP} text="Regístrate" />
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

export default Login;
