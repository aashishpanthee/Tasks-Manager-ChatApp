import moment from "moment";
export const convertTime = (date_input: string) => {
  return moment(date_input).format("llll");
};
