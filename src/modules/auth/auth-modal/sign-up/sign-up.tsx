import Button from "@/shared/components/button";
import Input from "@/shared/components/form/input";
import Link from "next/link";
import SignUpSchema from "./schema";
import { Form, Formik, FormikProps } from "formik";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const fieldClassName =
    "pl-2 leading-10 transition rounded bg-gray-200 focus-within:ring focus-within:!bg-white hover:bg-gray-300";
  const inputClassName = "placeholder:text-gray-500 font-semibold";

  return (
    <div className="rounded-xl overflow-hidden">
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        enableReinitialize
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <div className="flex py-6 px-6 flex-col gap-4">
            <h2 className="text-2xl font-semibold">Create an Account</h2>
            <Form className="flex flex-col gap-4 pb-2 items-start">
              <Input
                className={fieldClassName}
                inputClassName={inputClassName}
                placeholder="Username"
                name="username"
                error={errors.username}
                touched={touched.username}
              />

              <Input
                className={fieldClassName}
                inputClassName={inputClassName}
                type="email"
                placeholder="E-mail"
                name="email"
                error={errors.email}
                touched={touched.email}
              />
              <Input
                className={fieldClassName}
                inputClassName={inputClassName}
                type="password"
                placeholder="Password"
                name="password"
                error={errors.password}
                touched={touched.password}
              />
              <Input
                className={fieldClassName}
                inputClassName={inputClassName}
                type="password"
                placeholder="Confirm your password"
                name="confirmPassword"
                error={errors.confirmPassword}
                touched={touched.confirmPassword}
                onPaste={(e) => e.preventDefault()}
              />
              <Button
                className="leading-10 px-6 rounded font-semibold bg-blue-400 text-white hover:bg-blue-500"
                title="Sign up"
              >
                Sign up
              </Button>
            </Form>
          </div>
        )}
      </Formik>
      <div className="flex pt-4 pb-8 px-6 flex-col items-start gap-2 bg-gray-200">
        <h3 className="mt-2">Have an account?</h3>
        <Link
          className="leading-10 px-6 text-lg shadow-lg bg-white rounded-md"
          href="?auth=sign-in"
          shallow
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
