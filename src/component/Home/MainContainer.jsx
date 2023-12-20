import JobCard from "./JobCard";

function MainContainer({ jobList }) {
  return (
    <main className="main dark:bg-[#121721] bg-[#F4F6F8] min-h-screen flex flex-col items-center">
      <div className="listContainer flex flex-col justify-center items-center">
        {jobList.map((job) => {
          return <JobCard key={job.id} jobDetail={job} />;
        })}
      </div>
    </main>
  );
}

export default MainContainer;
