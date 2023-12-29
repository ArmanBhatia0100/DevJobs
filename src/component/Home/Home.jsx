import MainContainer from "./MainContainer";
import SearchBar from "./SearchBar";
import { useGetUserFilterInput } from "../../utils";
import Header from "../UI/Header";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../util/ReduxStore/authenticationSlice";
import { Navigate } from "react-router";

function Home() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  // custom hook
  const [filterJobList, doFilter] = useGetUserFilterInput();

  if (isAuthenticated) {
    return (
      <div className="home min-w-[360px]">
        <Header></Header>
        <SearchBar getUserInput={doFilter}></SearchBar>
        <MainContainer jobList={filterJobList} />
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
}
export default Home;
