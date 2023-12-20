import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

function SearchBar({ getUserInput }) {
  return (
    <div className="flex flex-col items-center h-20 bg-[#F4F6F8] dark:bg-[#121721]">
      {/* Small Screen searchBar */}
      <SmallScreenSearchBar getUserInput={getUserInput} />
      {/* Medium to large screen searchbar */}
      <LargeScreenSearchBar getUserInput={getUserInput} />
    </div>
  );
}

export default SearchBar;

function SmallScreenSearchBar({ getUserInput }) {
  return (
    <div className="md:hidden w-[80Vw] max-w-sm min-w-[19rem] mt-[-1rem] rounded-lg bg-white py-3 px-3 drop-shadow-lg dark:bg-[#19202D] ">
      <div className="flex flex-row justify-between">
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
          className="flex items-center rounded bg-primary px-3 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover: focus:outline-none focus:ring-0 active:bg-primary-700 ml-3 dark:border-white bg-[#5964E0]"
        >
          <SearchIcon size="large" />
        </button>
      </div>
    </div>
  );
}

function LargeScreenSearchBar({ getUserInput }) {
  return (
    <div className="hidden w-[90Vw] min-w-fit mt-[-1rem] rounded-lg bg-white px-3 drop-shadow-lg dark:bg-[#19202D] md:flex flex-row justify-around">
      {/* Search by postion */}
      <div className="flex flex-row justify-between items-center py-2 border-r-2">
        <SearchIcon sx={{ margin: "0 1rem" }} />
        <input
          type="text"
          className="dark:bg-[#19202D] py-3 dark:text-white"
          placeholder="Filter by title"
          onChange={(e) => {
            getUserInput(e.target.value);
          }}
        />
      </div>
      {/* Searchby location */}
      <div>
        <div className="flex flex-row justify-between items-center py-2 border-r-2">
          <FmdGoodIcon sx={{ margin: "0 1rem" }} />
          <input
            type="text"
            className="dark:bg-[#19202D] py-3 dark:text-white"
            placeholder="Location"
            onChange={(e) => {
              getUserInput(e.target.value);
            }}
          />
        </div>
      </div>
      {/* full time  and submit btn */}
      <div className="flex flex-row justify-between items-center px-3">
        <div className="mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] flex flex-row items-center">
          <input
            className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="checkbox"
            value=""
            id="checkboxDefault"
          />
          <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="checkboxDefault">
            Full Time
          </label>
        </div>
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="flex items-center rounded bg-primary p-3 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover: focus:outline-none focus:ring-0 active:bg-primary-700 ml-3 dark:border-white bg-[#5964E0]"
        >
          Search
        </button>
      </div>
    </div>
  );
}
