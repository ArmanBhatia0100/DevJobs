import initialJobData from "./data.json";

import { useState } from "react";

export const useGetUserFilterInput = () => {
  const [filterJobList, setFilterJobList] = useState(initialJobData);

  function doFilter(position, location = "", checked = false) {
    if (!position && !location) {
      setFilterJobList(() => initialJobData);
    } else if (position && !location) {
      setFilterJobList(() => {
        return initialJobData.filter((job) => {
          if (job.position.toLowerCase().includes(position.toLowerCase())) return true;
          else return null;
        });
      });
    } else if (!position && location) {
      setFilterJobList(() => {
        return initialJobData.filter((job) => {
          if (job.location.toLowerCase().includes(location.toLowerCase())) return true;
          else return null;
        });
      });
    } else {
      setFilterJobList(() => {
        return initialJobData.filter((job) => {
          if (job.position.toLowerCase().includes(position.toLowerCase()) && job.location.toLowerCase() === location.toLowerCase()) return true;
          else return null;
        });
      });
    }

    if (checked) {
      const newFilterList = filterJobList.filter((job) => {
        return job.contract.includes("Full");
      });
      setFilterJobList(() => newFilterList);
    }
  }

  return [filterJobList, doFilter];
};
