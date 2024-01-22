import { toast } from "react-toastify";

export const toastError = (mesg: string) => {
  toast.error(mesg);
};
export const toastSuccess = (mesg: string) => {
  toast.success(mesg);
};
export const toastWarning = (mesg: string) => {
  toast.warn(mesg);
};
export const toastInfo = (mesg: string) => {
  toast.info(mesg);
};
