import { useFormik } from "formik";
import { addUser } from "../../util/firebase";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

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

  const getGoogleSignin = async () => {
    try {
      const auth = getAuth();
      const userCred = await signInWithPopup(auth, new GoogleAuthProvider());
      const { user } = userCred;
      const { accessToken } = user;
      window.localStorage.setItem("token", accessToken);
      setLoginLoading(() => {
        return true;
      });
      setInterval(() => {
        navigation("/home");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

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
              <button type="button" class="text-white bg-[#1976d2] dark:bg-[#1976d2] cursor-not-allowed font-semibold rounded-lg  text-lg px-5 py-2.5 text-center" disabled>
                <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="fill-blue-600"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Login
              </button>
            ) : (
              <button type="button" class="text-white bg-[#1976d2] dark:bg-[#1976d2] cursor-not-allowed font-semibold rounded-lg  text-lg px-5 py-2.5 text-center" disabled>
                Login
              </button>
            )}
          </form>
          <p className="text-center my-3 font-semibold text-zinc-500">Sign In with</p>
          <button
            type="button"
            class="w-full text-white text-lg bg-[#49648f] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-semibold rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            onClick={getGoogleSignin}
          >
            <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
              <path
                fill-rule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clip-rule="evenodd"
              />
            </svg>
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
