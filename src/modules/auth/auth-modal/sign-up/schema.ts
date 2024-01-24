import * as Yup from "yup";
import {
  confirmPasswordField,
  passwordField,
} from "@/shared/validation/validate-password";
import { VALIDATION_REQUIRED_MESSAGE } from "@/shared/validation/common-messages";

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Username should be at least 5 character length")
    .max(25, "Username shouldn't contain more 25 characters")
    .required(VALIDATION_REQUIRED_MESSAGE),
  password: passwordField,
  confirmPassword: confirmPasswordField,
  email: Yup.string()
    .email("Invalid email")
    .required(VALIDATION_REQUIRED_MESSAGE),
});

export default SignUpSchema;
