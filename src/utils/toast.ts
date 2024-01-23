import { toast } from "react-toastify";
import { setLoadingType } from "../Types";

export const toastError = (mesg: string, setLoading?: setLoadingType) => {
  toast.error(mesg);
  if (setLoading) {
    setLoading(false);
  }
};
export const toastSuccess = (mesg: string, setLoading?: setLoadingType) => {
  toast.success(mesg);
  if (setLoading) {
    setLoading(false);
  }
};
export const toastWarning = (mesg: string, setLoading?: setLoadingType) => {
  toast.warn(mesg);
  if (setLoading) {
    setLoading(false);
  }
};
export const toastInfo = (mesg: string, setLoading?: setLoadingType) => {
  toast.info(mesg);
  if (setLoading) {
    setLoading(false);
  }
};
