import Header from "../UI/Header";
import CompanyCard from "./CompanyInfo";
import RoleDescription from "./RoleDescription";

import { useLocation } from "react-router";



function JobDescription() {
  const { state } = useLocation();
  const { jobData } = state;
  return (
    <div className="dark:bg-[#121721]">
      <Header></Header>
      <CompanyCard jobData={jobData}></CompanyCard>
      <RoleDescription jobData={jobData} />
    </div>
  );
}
export default JobDescription;
