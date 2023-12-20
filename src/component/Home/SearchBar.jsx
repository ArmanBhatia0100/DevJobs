import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ getUserInput }) {
  return (
    <div className="relative flex flex-col items-center outline-2 w-[100vw] h-20 bg-[#F4F6F8] dark:bg-[#121721]">
      <div className="searchBar relative top-[-1.5rem] rounded-lg bg-white w-[20rem] py-3 px-3 flex flex-row drop-shadow-lg dark:bg-[#19202D]">
        <input
          type="text"
          className="dark:bg-[#19202D] py-3 dark:text-white"
          placeholder="Filter by title"
          onChange={(e) => {
            getUserInput(e.target.value);
          }}
        />
        <button type="button" data-te-ripple-init data-te-ripple-color="light">
          <FilterAltIcon size="large" sx={{ color: "white" }} />
        </button>

        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="flex items-center rounded bg-primary px-3 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover: focus:outline-none focus:ring-0 active:bg-primary-700 ml-3 dark:border-white bg-[#5964E0]"
        >
          <SearchIcon size="large" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
