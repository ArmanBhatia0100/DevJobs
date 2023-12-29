import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Switch from "@mui/material/Switch";
import { useDispatch } from "react-redux";
import { logout } from "../../util/ReduxStore/authenticationSlice";

import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  return (
    <header className="bg-mobile-header p-5 pt-8 h-32 lg:rounded-bl-3xl dark:bg-[#121721]">
      <div className="flex flex-row justify-between items-center ">
        <Link to="/home">
          <div>
            <img src="./assets/desktop/logo.svg" alt="Logo-Devjobs" className=""></img>
          </div>
        </Link>
        <div className="flex flex-row">
          <div className="theme-action-btn mr-6">
            <Brightness7Icon sx={{ color: "white" }} />
            <Switch
              onChange={() => {
                const html = document.getElementsByTagName("html");
                if (html[0].classList[0] === "dark") {
                  html[0].classList.remove("dark");
                  html[0].classList.add("light");
                } else {
                  html[0].classList.remove("light");
                  html[0].classList.add("dark");
                }
              }}
              inputProps={{ "aria-label": "controlled" }}
              color="default"
            />
            <Brightness3Icon sx={{ color: "white" }} />
          </div>
          <button
            type="button"
            onClick={() => dispatch(logout())}
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
