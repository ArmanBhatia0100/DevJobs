import { useFormik, form } from "formik";
import { addUser } from "../../util/firebase";
import { useNavigate } from "react-router-dom";

import { TextField, Button } from "@mui/material";
import { useState } from "react";

const Auth = () => {
  const navigation = useNavigate();
  const [loginLoading, setLoginLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "Arman Bhatia",
      email: "arman@gmail.com",
    },
    onSubmit: (value) => {
      const jsonVal = JSON.stringify(value);
      const user = JSON.parse(jsonVal);
      addUser(user);
      setTimeout(() => {
        navigation("/home");
      }, 800);
    },
  });

  return (
    <div className="min-h-screen flex flex-row">
      <div className="w-[50%] bg-gray-800 hidden md:block"></div>
      <div className="w-100 flex flex-col justify-center m-auto">
        <div className="formContainer p-5 border-black border">
          <form onSubmit={formik.handleSubmit} className="flex flex-col">
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              sx={{
                marginBottom: "1rem",
              }}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              sx={{
                marginBottom: "1rem",
              }}
            />
            {loginLoading ? (
              <Button disabled color="danger" variant="contained" fullWidth type="submit">
                Login
              </Button>
            ) : (
              <Button color="primary" variant="contained" fullWidth type="submit">
                Login
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
