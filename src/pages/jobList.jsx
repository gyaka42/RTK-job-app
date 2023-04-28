import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../redux/jobSlice";
import Filter from "../components/filter";

const JobList = () => {
  const state = useSelector((state) => state.jobState);
  const dispatch = useDispatch();
  console.log(state);

  useEffect(() => {
    axios
      .get("http://localhost:3004/jobs")
      .then((res) => dispatch(getJobs(res.data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Filter />
      <h3 className="job-count">{state.filtredJobs.length} Is bulundu</h3>
      <section className="list-section">
        {!state.initialized ? (
          <p>Loading</p>
        ) : (
          state.filtredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="head">
                <div className="letter">
                  <p>{job.company[0]}</p>
                </div>
                <div className="info">
                  <p>{job.position}</p>
                  <p>{job.company}</p>
                </div>
              </div>
              <div className="body">
                <div className="field">
                  <img src="/images/map.png" />
                  <p>{job.location}</p>
                </div>
                <div className="field">
                  <img src="/images/calendar.png" />
                  <p>{job.date}</p>
                </div>
                <div className="field">
                  <img src="/images/bag.png" />
                  <p>{job.type}</p>
                </div>

                <div className="status">
                  <p className={job.status}>{job.status}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default JobList;
