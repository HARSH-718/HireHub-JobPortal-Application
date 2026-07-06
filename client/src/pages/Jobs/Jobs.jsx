

import JobHero from "../../components/jobs/JobHero/JobHero";
import JobFilters from "../../components/jobs/JobFilters/JobFilters";
import JobList from "../../components/jobs/JobList/JobList";
import Pagination from "../../components/jobs/Pagination/Pagination";


import "./Jobs.css";

function Jobs() {
  return (
    <>
   
      <JobHero />
      <JobFilters/>
      <JobList/>
      <Pagination/>
  
    </>
  );
}

export default Jobs;