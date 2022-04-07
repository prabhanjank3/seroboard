import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const success = () => {
  toast.configure();
  toast.success(" User Edited SuccessFully!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
const fail = () => {
  toast.configure();
  toast.error("Something went wrong!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
