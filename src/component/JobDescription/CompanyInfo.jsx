import { Button } from "@mui/material";

function CompanyCard({ jobData }) {
  return (
    <div className="relative job-container flex flex-col items-center justify-between py-12 my-card max-w-[90%] min-h-[15rem] m-auto top-[-1rem] dark:bg-[#19202D] ">
      <div className="absolute top-[-1.5rem] w-[6rem] h-[4rem] p-1 rounded-xl flex justify-center " style={{ backgroundColor: jobData.logoBackground }}>
        <img src={jobData.logo} className="p-2 rounded-2xl" alt="" />
      </div>
      <h1 className="pt-3 text-grey text-2xl font-bold dark:text-white">{jobData.company}</h1>
      <h4 className="text-zinc-500 text-xl">{jobData.website}</h4>
      <Button variant="contained" sx={{ backgroundColor: "#5964E0" }} onClick={() => (window.location.href = `${jobData.website}`)}>
        Company Site
      </Button>
    </div>
  );
}

export default CompanyCard;
