import { defaultVariables } from "../config/consts";

export const getVariable = (name: string): string => {
  return defaultVariables[name] ?? "";
};

export const getExperienceYear = () => {
  const startDate = new Date("01-01-2019");
  const today = new Date();
  return Math.ceil(today.getFullYear() - startDate.getFullYear());
};
