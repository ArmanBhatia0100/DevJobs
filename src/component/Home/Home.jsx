import Header from "./Header";
import MainContainer from "./MainContainer";
import SearchBar from "./SearchBar";
import { useGetUserFilterInput } from "../../utils";

function Home() {
  // custom hook
  const [filterJobList, doFilter] = useGetUserFilterInput();

  return (
    <div className="home">
      <Header></Header>
      <SearchBar getUserInput={doFilter}></SearchBar>
      <MainContainer jobList={filterJobList} />
    </div>
  );
}
export default Home;
