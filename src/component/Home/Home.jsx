import Header from "./Header";
import MainContainer from "./MainContainer";
import SearchBar from "./SearchBar";
import initialJobData from "../../data.json";
import { useState } from "react";

function Home() {
  const [filterJobList, setFilterJobList] = useState(initialJobData);

  const getUserFilterInput = (position) => {
    if (position == "") {
      setFilterJobList(() => initialJobData);
    } else
      setFilterJobList(() =>
        initialJobData.filter((job) => {
          if (job.position.toLowerCase().includes(position.toLowerCase())) return true;
        })
      );
  };

  return (
    <div className="home">
      <Header></Header>
      <SearchBar getUserInput={getUserFilterInput}></SearchBar>
      <MainContainer jobList={filterJobList} />
    </div>
  );
}
export default Home;
