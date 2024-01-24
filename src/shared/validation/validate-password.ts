import { string, ref } from "yup";

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

export const passwordField = string()
  .required("Please enter a password")
  .min(8, "Password must have at least 8 characters")
  .matches(/[0-9]/, getCharacterValidationError("digit"))
  .matches(/[a-z]/, getCharacterValidationError("lowercase"))
  .matches(/[A-Z]/, getCharacterValidationError("uppercase"));

export const confirmPasswordField = string()
  .required("Please re-type your password")
  .oneOf([ref("password")], "Passwords do not match");
