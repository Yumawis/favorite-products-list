import CustomLoginCard from "../cards/CustomLoginCard";
import CustomTextInput from "../inputs/CustomTextInput";
import CustomNumberInput from "../inputs/CustomNumberInput";

import { Button, Typography, Box } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/");
  };

  return (
    <CustomLoginCard>
      <h1>Registrar</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          nickname: "",
          documentNumber: "",
        }}
        onSubmit={(values) => {
          console.log("REGISTER:", values);
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form style={{ width: "100%" }}>
            <Field
              as={CustomTextInput}
              name="firstName"
              label="Nombres"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Field
              as={CustomTextInput}
              name="lastName"
              label="Apellidos"
              sx={{ marginTop: "15px" }}
              value={values.lastName}
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

            <Button type="submit" variant="contained" fullWidth sx={{ marginTop: "20px" }}>
              Registrarse
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
    </CustomLoginCard>
  );
};

export default Register;
