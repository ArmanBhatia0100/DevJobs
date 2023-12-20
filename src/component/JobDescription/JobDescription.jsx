import Header from "../UI/Header";
import { useLocation } from "react-router";

import { Button } from "@mui/material";

function JobDescription() {
  const { state } = useLocation();
  const { jobData } = state;
  return (
    <>
      <Header></Header>
      <div className="relative job-container flex flex-col items-center justify-between py-12 my-card max-w-[90%] min-h-[15rem] m-auto top-[-1rem]">
        <div className="absolute top-[-1.5rem] w-[6rem] h-[4rem] p-1 rounded-xl flex justify-center " style={{ backgroundColor: jobData.logoBackground }}>
          <img src={jobData.logo} className="p-2 rounded-2xl" alt="" />
        </div>
        <h1 className="pt-3 text-grey text-2xl font-bold">{jobData.company}</h1>
        <h4 className="text-zinc-500 text-xl">{jobData.website}</h4>
        <Button variant="contained" sx={{ backgroundColor: "#5964E0" }} onClick={() => (window.location.href = `${jobData.website}`)}>
          Company Site
        </Button>
      </div>

      <div className="jobDescription my-card p-9 px-5">
        <div className="min-h-[10rem] flex flex-col ">
          <p className="text-gray-400 text-xl font-medium p-2">{`${jobData.postedAt} . ${jobData.contract}`}</p>
          <p className="p-2 text-2xl font-bold">{jobData.position}</p>
          <p className="p-2 mb-8 text-xl text-violet font-bold">{jobData.location}</p>
        </div>
        <Button variant="contained" sx={{ backgroundColor: "#5964E0", width: "100%", marginBottom: "2rem" }} onClick={() => (window.location.href = `${jobData.apply}`)}>
          Apply Now
        </Button>

        <div>
          <div className="text-2xl text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam pariatur consequuntur corporis recusandae deserunt dolor illo, aliquam eius eaque officiis quibusdam quod
            distinctio, doloremque suscipit cumque? Culpa, et amet!
          </div>

          <div className="py-6">
            <h2 className="font-bold text-2xl ">Requirements</h2>
            <div>
              <div className="pt-3 text-2xl text-gray-500 ">{jobData.requirements.content}</div>
              <ul className="list-disc list-inside pl-5 pt-3">
                {jobData.requirements.items.map((item, index) => {
                  return (
                    <li key={index} className="pt-3 text-2xl text-gray-500 before:content-['\2022'] before:text-violet before:font-bold before:text-4xl before:mr-3 flex flex-row items-baseline">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl">What you will do</h2>
            <div className="pt-3">
              <div className="text-2xl text-gray-500">{jobData.role.content}</div>

              <ol className="">
                {jobData.role.items.map((item, index) => {
                  return (
                    <li key={index} className="pl-5 pt-3 text-2xl text-gray-500 before:content-['\2022'] before:text-violet before:font-bold before:text-4xl before:mr-3 flex flex-row items-baseline">
                      {item}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
          <div>
            <Button variant="contained" sx={{ backgroundColor: "#5964E0", width: "100%", marginTop: "2rem" }} onClick={() => (window.location.href = `${jobData.apply}`)}>
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default JobDescription;
