import * as Yup from "yup";
import { passwordField } from "@/shared/validation/validate-password";

const SignInSchema = Yup.object().shape({
  password: passwordField,
  email: Yup.string().email("Invalid email").required("This field is required"),
});

export default SignInSchema;
