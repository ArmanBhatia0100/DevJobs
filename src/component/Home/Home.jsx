import Header from "./Header";
import MainContainer from "./MainContainer";
import SearchBar from "./SearchBar";
import jobData from "../../data.json";
import { useState } from "react";

function Home() {
  const [data, setData] = useState(jobData);
  return (
    <div className="home">
      <Header></Header>
      <SearchBar></SearchBar>
      <MainContainer jobList={data} />
    </div>
  );
}
export default Home;
