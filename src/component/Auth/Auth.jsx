import { useFormik } from "formik";
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-zinc-50  md:flex-row md:items-stretch md:justify-normal">
      <div className="w-[50%] bg-gray-800 hidden md:block md:w-[50%] md:bg-login-poster md:bg-center md:brightness-50 md:bg-cover md:min-h-100"></div>
      <div className="flex w-full justify-center items-center md:w-[50%] md:">
        <div className="formContainer min-w-[80%] flex flex-col justify-center">
          <h1 class="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Dev Jobs</span>
          </h1>

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
