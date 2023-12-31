import { Button } from "@mui/material";

function RoleDescription({ jobData }) {
  return (
    <div className="jobDescription my-card dark:bg-[#19202D] p-9 px-5">
      <div className="min-h-[10rem] flex flex-col ">
        <p className="text-gray-400 text-xl font-medium p-2">{`${jobData.postedAt} . ${jobData.contract}`}</p>
        <p className="p-2 text-2xl font-bold dark:text-white">{jobData.position}</p>
        <p className="p-2 mb-8 text-xl text-violet font-bold">{jobData.location}</p>
      </div>
      <Button variant="contained" sx={{ backgroundColor: "#5964E0", width: "100%", marginBottom: "2rem" }} onClick={() => (window.location.href = `${jobData.apply}`)}>
        Apply Now
      </Button>

      <div>
        <div className="text-2xl text-gray-500 dark:text-[#9DAEC2]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam pariatur consequuntur corporis recusandae deserunt dolor illo, aliquam eius eaque officiis quibusdam quod
          distinctio, doloremque suscipit cumque? Culpa, et amet!
        </div>

        <div className="py-6">
          <h2 className="font-bold text-2xl  dark:text-white">Requirements</h2>
          <div>
            <div className="pt-3 text-2xl text-gray-500 dark:text-[#9DAEC2]">{jobData.requirements.content}</div>
            <ul className="list-disc list-inside pl-5 pt-3">
              {jobData.requirements.items.map((item, index) => {
                return (
                  <p
                    key={index + 1}
                    className="pt-3 text-2xl text-gray-500 before:content-['/2022'] before:text-violet before:font-bold before:text-4xl before:mr-3 flex flex-row items-baseline dark:text-[#9DAEC2]"
                  >
                    {item}
                  </p>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl dark:text-white">What you will do</h2>
          <div className="pt-3">
            <div className="text-2xl text-gray-500 dark:text-[#9DAEC2]">{jobData.role.content}</div>

            <ol className="">
              {jobData.role.items.map((item, index) => {
                return (
                  <p
                    key={index}
                    // className="pl-5 pt-3 text-2xl text-gray-500 dark:text-[#9DAEC2] before:content-['\2022'] before:text-violet before:font-bold before:text-4xl before:mr-3 flex flex-row items-baseline"
                  >
                    {item}
                  </p>
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
  );
}

export default RoleDescription;
