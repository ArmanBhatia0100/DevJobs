import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ getUserInput }) {
  return (
    <div className="relative flex flex-col items-center outline-2 w-[100vw] h-20 bg-[#F4F6F8]">
      <div className="searchBar relative top-[-1.5rem] rounded-lg bg-white w-[20rem] py-3 px-3 flex flex-row drop-shadow-lg">
        <InputBase
          sx={{ backgroundColor: "#fffff", color: "#19202D" }}
          placeholder="Filter by title"
          onChange={(e) => {
            getUserInput(e.target.value);
          }}
        />
        <IconButton aria-label="delete">
          <FilterAltIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <div className="bg-[#5964E0] flex justify-center items-center p-1 rounded-md">
            <SearchIcon sx={{ color: "White", backgroundColor: "#5964E0", width: "2rem", height: "2rem" }} size="large" />
          </div>
        </IconButton>
      </div>
    </div>
  );
}

export default SearchBar;
