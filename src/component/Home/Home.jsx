import MainContainer from "./MainContainer";
import SearchBar from "./SearchBar";
import { useGetUserFilterInput } from "../../utils";
import Header from "../UI/Header";

function Home() {
  // custom hook
  const [filterJobList, doFilter] = useGetUserFilterInput();

  return (
    <div className="home min-w-[360px]">
      <Header></Header>

      <SearchBar getUserInput={doFilter}></SearchBar>
      <MainContainer jobList={filterJobList} />
    </div>
  );
}
export default Home;
