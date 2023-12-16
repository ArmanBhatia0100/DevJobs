import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Switch from "@mui/material/Switch";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import InputBase from "@mui/material/InputBase";
function App() {
  return (
    <div className="App">
      <div className="home">
        <header className="bg-mobile-header p-3 h-32">
          <div className="flex justify-between items-center ">
            <div>
              <img src="./assets/desktop/logo.svg" alt="Logo-Devjobs" className=""></img>
            </div>
            <div className="theme-action-btn">
              <Brightness7Icon />
              <Switch onChange={() => {}} inputProps={{ "aria-label": "controlled" }} />
              <Brightness3Icon />
            </div>
          </div>
        </header>
        <div className="relative flex flex-col items-center outline-2 h-1 w-[100vw] bg-blue-600">
          <div className="searchBar relative top-[-1.5rem] rounded-lg bg-white w-[19rem] py-3 px-3">
            <InputBase sx={{ backgroundColor: "#fffff" }} placeholder="search the job" />
            <IconButton aria-label="delete">
              <FilterAltIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <SearchIcon />
            </IconButton>
          </div>
        </div>

        <main className="main bg-[#F4F6F8] h-screen"></main>
      </div>
    </div>
  );
}

export default App;
