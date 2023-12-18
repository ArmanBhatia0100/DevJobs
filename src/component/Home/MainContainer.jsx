import JobCard from "./JobCard";

function MainContainer({ jobList }) {
  return (
    <main className="main bg-[#F4F6F8] min-h-screen flex flex-col items-center">
      <div className="listContainer flex flex-col justify-center items-center">
        {jobList.map((job) => {
          return <JobCard jobDetail={job} />;
        })}
      </div>
    </main>
  );
}

export default MainContainer;
