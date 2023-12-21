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
            className="dark:bg-[#19202D] py-3 dark:text-white grow  dark:placeholder:text-white"
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
            className="dark:bg-[#19202D] py-3 dark:text-white grow dark:placeholder:text-white"
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
            <input
              className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid  checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)]  dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:after:border-black dark:checked:after:border-white"
              type="checkbox"
              value=""
              checked={isChecked}
              id="checkboxDefault"
              onChange={onCheckboxChangeHandler}
            />
            <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="checkboxDefault">
              Full Time
            </label>
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
