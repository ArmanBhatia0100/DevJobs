import Header from "./Header";
import SearchBar from "./SearchBar";
function Home() {
  return (
    <div className="home">
      <Header></Header>
      <SearchBar></SearchBar>
      <main className="main bg-[#F4F6F8] h-screen flex flex-col items-center">
        <div className="listContainer flex flex-col justify-center items-center">
          <div className="jobCard relative bg-white p-6 m-3 w-[17rem] ">
            <div className="logo-container absolute top-[-1.5rem]">
              <img src="./assets/logos/pod.svg" alt="company-logo" className="w-11 h-11" />
            </div>
            <div className="">
              <p>5h Full time</p>
            </div>
            <div className="">Software engireer</div>
            <div className="">Scoot</div>
            <div className="">United Kingdom</div>
          </div>

          <div className="jobCard bg-white p-6 w-[17rem]">
            <div className="logo-container">
              <img src="./assets/logos/pod.svg" alt="company-logo" />
            </div>
            <div className="">
              <p>5h Full time</p>
            </div>
            <div className="">Software engireer</div>
            <div className="">Scoot</div>
            <div className="">United Kingdom</div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Home;
