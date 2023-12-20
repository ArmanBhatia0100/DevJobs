import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Switch from "@mui/material/Switch";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-mobile-header p-5 pt-8 h-32 rounded-bl-3xl">
      <div className="flex justify-between items-center ">
        <Link to="/">
          <div>
            <img src="./assets/desktop/logo.svg" alt="Logo-Devjobs" className=""></img>
          </div>
        </Link>
        <div className="theme-action-btn">
          <Brightness7Icon sx={{ color: "white" }} />
          <Switch onChange={() => {}} inputProps={{ "aria-label": "controlled" }} color="default" />
          <Brightness3Icon sx={{ color: "white" }} />
        </div>
      </div>
    </header>
  );
}

export default Header;
