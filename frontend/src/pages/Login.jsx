import CustomLoginCard from "../cards/CustomLoginCard";
import CustomNumberInput from "../inputs/CustomNumberInput";

import { Box, Button, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";

const Login = ({ onGoToRegister }) => {
  return (
    <CustomLoginCard>
      <h1>Login</h1>

      <Formik
        initialValues={{ documentNumber: "" }}
        onSubmit={(values) => {
          console.log("LOGIN:", values);
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
                  onClick={onGoToRegister}
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
