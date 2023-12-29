import { Link } from "react-router-dom";

function JobCard({ jobDetail }) {
  return (
    <Link to="/job" state={{ jobData: jobDetail }}>
      <div className="jobCard relative bg-white dark:bg-[#19202D] p-6 w-[90%] max-w-sm min-w-[19rem] flex flex-col justify-evenly min-h-fit rounded-xl drop-shadow-lg border border-black">
        <div className="logo-container absolute top-[-1.5rem]">
          <img src={jobDetail.logo} alt={jobDetail.company} className="p-2 rounded-2xl h-[3rem] w-[3rem]" style={{ backgroundColor: jobDetail.logoBackground }} />
        </div>
        <p className="text-[#6E8098] pt-3">
          {jobDetail.postedAt} {jobDetail.contract}
        </p>
        <div className="text-[#19202D] font-bold text-lg pt-2 dark:text-white">
          {jobDetail.position.substring(0, 25).length >= 25 ? jobDetail.position.substring(0, 25) + "..." : jobDetail.position.substring(0, 25)}
        </div>
        <div className=" text-[#6E8098] pt-2">{jobDetail.company}</div>
        <div className="text-light-violet font-bold pt-7">{jobDetail.location}</div>
      </div>
    </Link>
  );
}

export default JobCard;
