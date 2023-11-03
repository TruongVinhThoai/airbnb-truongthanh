import { format } from "date-fns";

export const shortenString = (stringVal, amount) =>
  stringVal.substring(0, amount).concat("...");

export const truncateWords = (sentence, amount) => {
  const words = sentence ? sentence?.split(" ") : sentence;

  if (amount >= words.length) {
    return sentence;
  }

  const truncated = words.slice(0, amount);
  return `${truncated.join(" ")}...`;
};

export const dateFromIsoString = (date) => {
  const originalDate = new Date(date);
  return originalDate.toISOString();
};

export const formattedDate = (date) => {
  const originalDate = new Date(date);
  return format(originalDate, "dd-MM-yyyy");
};
