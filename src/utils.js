import initialJobData from "./data.json";

import { useState } from "react";

export const useGetUserFilterInput = () => {
  const [filterJobList, setFilterJobList] = useState(initialJobData);
  function doFilter(position) {
    if (position == "") {
      setFilterJobList(() => initialJobData);
    } else
      setFilterJobList(() =>
        initialJobData.filter((job) => {
          if (job.position.toLowerCase().includes(position.toLowerCase())) return true;
        })
      );
  }

  return [filterJobList, doFilter];
};
