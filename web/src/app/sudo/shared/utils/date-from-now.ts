import { formatDistance } from "date-fns";

export const dateFromNow = (date: string) => {
  return formatDistance(date, new Date());
};
