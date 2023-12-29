import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useState } from "react";

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
  const [jobPostion, setJobPosition] = useState();

  function onSubmitHandler(e) {
    e.preventDefault();
    getUserInput(jobPostion);
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="md:hidden w-[80Vw] max-w-sm min-w-[19rem] mt-[-1rem] rounded-lg bg-white py-3 px-3 drop-shadow-lg dark:bg-[#19202D] ">
        <div className="flex flex-row justify-between">
          <input
            type="text"
            name="position"
            className="dark:bg-[#19202D] py-3 dark:text-white"
            placeholder="Filter by title"
            onChange={(e) => {
              setJobPosition(() => e.target.value);
            }}
          />
          <button type="button" data-te-ripple-init data-te-ripple-color="light">
            <FilterAltIcon size="large" sx={{ color: "white" }} />
          </button>

          <button
            type="submit"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="flex items-center rounded bg-primary px-3 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover: focus:outline-none focus:ring-0 active:bg-primary-700 ml-3 dark:border-white bg-[#5964E0]"
          >
            <SearchIcon size="large" />
          </button>
        </div>
      </div>
    </form>
  );
}

function LargeScreenSearchBar({ getUserInput }) {
  const [searchPostion, setSearchPostion] = useState("");
  const [searchLocation, setLocation] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function onCheckboxChangeHandler() {
    setIsChecked(!isChecked);
  }

  function userInputSubmithandler(e) {
    e.preventDefault();
    getUserInput(searchPostion, searchLocation, isChecked);
  }

  return (
    <form onSubmit={userInputSubmithandler}>
      <div className="hidden w-[90%] min-w-fit mt-[-1rem] rounded-lg bg-white px-3 drop-shadow-lg dark:bg-[#19202D] md:flex flex-row justify-around">
        {/* Search by postion */}

        <div className="flex flex-row justify-evenly items-center grow py-2 border-r-2 dark:border-[#6E8098] px-2">
          <SearchIcon sx={{ margin: "0 1rem", color: "grey" }} />
          <input
            name="position"
            type="text"
            className="dark:bg-[#19202D] py-3 dark:text-white grow  dark:placeholder:text-white border-none  focus:ring-0 placeholder:text-lg text-lg font-semibold"
            placeholder="Filter by title"
            onChange={(e) => {
              setSearchPostion(() => {
                return e.target.value;
              });
            }}
          />
        </div>
        {/* Searchby location */}
        <div className="flex flex-row justify-evenly items-center grow py-2 border-r-2 dark:border-[#6E8098] px-2">
          <FmdGoodIcon sx={{ margin: "0 1rem", color: "grey" }} />
          <input
            name="location"
            type="text"
            className="dark:bg-[#19202D] py-3 dark:text-white grow dark:placeholder:text-white border-none outline-none focus:ring-0 placeholder:text-lg text-lg font-semibold"
            placeholder="Location"
            onChange={(e) => {
              setLocation(() => {
                return e.target.value;
              });
            }}
          />
        </div>
        {/* full time  and submit btn */}
        <div className="flex flex-row justify-evenly items-center grow px-2">
          <div className="mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] flex flex-row items-center dark:text-white">
            <div class="flex flex-row items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="default-checkbox" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Full Time
              </label>
            </div>
          </div>
          <button
            type="submit"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="flex items-center rounded bg-primary p-3 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover: focus:outline-none focus:ring-0 active:bg-primary-700 ml-3 dark:border-white bg-[#5964E0]"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
