import "./JobDetails.css";

import JobDetailsHero from "../../components/jobs/JobDetailsHero/JobDetailsHero";
import JobDescription from "../../components/jobs/JobDescription/JobDescription";
import CompanyInfo from "../../components/jobs/CompanyInfo/CompanyInfo";
import SimilarJobs from "../../components/jobs/SimilarJobs/SimilarJobs";


function JobDetails() {
  return (
    <main className="job-details-page">

      <JobDetailsHero />
      <JobDescription/>
      <CompanyInfo/>
      <SimilarJobs/>


    </main>
  );
}

export default JobDetails;