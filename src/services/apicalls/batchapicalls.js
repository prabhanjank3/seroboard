import axios from "axios";
import Properties from "../../Properties";

const getAllBatchs = () => {
  return axios.get(Properties.SERVER_URL + "/batch");
};
const getBatchDetails = (id) => {
  return axios.get(Properties.SERVER_URL + "/batch/" + id);
};
const getBatchInDuration = (duration) => {
  return axios.get(
    Properties.SERVER_URL +
      "/batchduration?from=" +
      duration.from +
      "&to=" +
      duration.to
  );
};
const insertNewBatch = (BatchData) => {
  return axios.post(Properties.SERVER_URL + "/batch", BatchData, {
    headers: {
      "Content-type": "application/json",
    },
  });
};
const updateBatch = (id, data) => {
  return axios.patch(Properties.SERVER_URL + "/batch/" + id, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};
const deleteBatch = (id) => {
  return axios.delete(Properties.SERVER_URL + "/batch/" + id);
};
export {
  insertNewBatch,
  updateBatch,
  deleteBatch,
  getAllBatchs,
  getBatchDetails,
  getBatchInDuration,
};
