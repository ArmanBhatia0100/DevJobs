import JobCard from "./JobCard";

function MainContainer({ jobList }) {
  return (
    <main className="main dark:bg-[#121721] bg-[#F4F6F8] min-h-screen flex flex-col items-center">
      {/* <div className="listContainer flex flex-col justify-center items-center">
        {jobList.map((job) => {
          return <JobCard key={job.id} jobDetail={job} />;
        })}
      </div> */}
      <div className="listContainer md:grid md:grid-cols-2 gap-2 lg:grid lg:grid-cols-3">
        {jobList.map((job) => {
          return <JobCard key={job.id} jobDetail={job} />;
        })}
      </div>
    </main>
  );
}

export default MainContainer;
