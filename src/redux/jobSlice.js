import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  filtredJobs: [],
  initialized: false,
};

const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
    getJobs: (state, action) => {
      state.jobs = action.payload;
      state.filtredJobs = action.payload;
      state.initialized = true;
    },
    handleInputChange: (state, action) => {
      const filteredByQuery = state.jobs.filter((job) => {
        const query = action.payload.toLowerCase();
        const selectedJob = job.company.toLowerCase();
        return selectedJob.includes(query);
      });
      // olusan filtrelenmis diziyi state e aktarma
      state.filtredJobs = filteredByQuery;
    },
    handleStatusChange: (state, action) => {
      const filteredByStatus = state.jobs.filter(
        (job) => job.status === action.payload
      );
      state.filtredJobs = filteredByStatus;
    },
    handleSortChange: (state, action) => {
      switch (action.payload) {
        case "a-z":
          state.filtredJobs.sort((a, b) => {
            if (a.company < b.company) return -1;
            if (a.company > b.company) return 1;

            return 0;
          });
          break;

        case "z-a":
          state.filtredJobs.sort((a, b) => {
            if (a.company < b.company) return 1;
            if (a.company > b.company) return -1;

            return 0;
          });
          break;

        case "En Yeni":
          state.filtredJobs.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;

        case "En Eski":
          state.filtredJobs
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .reverse();
          break;
        default:
          break;
      }
    },
    handleReset: (state) => {
      state.filtredJobs = state.jobs;
    },
  },
});

export const {
  getJobs,
  handleInputChange,
  handleStatusChange,
  handleSortChange,
  handleReset,
} = jobSlice.actions;

export default jobSlice.reducer;
