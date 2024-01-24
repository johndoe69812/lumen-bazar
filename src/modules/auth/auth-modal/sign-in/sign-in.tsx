import Button from "@/shared/components/button";
import Input from "@/shared/components/form/input";
import OAuthLinks from "../oauth-links";
import Link from "next/link";
import { Form, Formik } from "formik";
import SignInSchema from "./schema";

const initialValues = {
  password: "",
  email: "",
};

const SignIn = () => {
  const fieldClassName =
    "leading-10 transition rounded bg-gray-200 focus-within:ring focus-within:!bg-white hover:bg-gray-300";
  const inputClassName = "pl-2 placeholder:text-gray-500";

  return (
    <div className="rounded-xl overflow-hidden">
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <div className="flex py-6 px-6 flex-col gap-4">
            <h2 className="text-2xl font-semibold">Sign in to your account</h2>
            <Form className="flex flex-col gap-4 pb-2 items-start">
              <Input
                className={fieldClassName}
                inputClassName={inputClassName}
                placeholder="E-mail"
                name="email"
                type="email"
                error={errors.email}
                touched={touched.email}
              />
              <Input
                className={fieldClassName}
                inputClassName={inputClassName}
                placeholder="Password"
                type="password"
                name="password"
                error={errors.password}
                touched={touched.password}
              />
              <Button
                className="leading-10 px-6 rounded font-semibold bg-blue-400 text-white hover:bg-blue-500"
                title="Sign in"
              >
                Sign in
              </Button>
            </Form>
          </div>
        )}
      </Formik>
      <div className="flex pt-4 pb-8 px-6 flex-col items-start gap-2 bg-gray-200">
        <h3 className="text-lg text-neutral-700">Or proceed with</h3>
        <OAuthLinks />
        <h3 className="mt-2">Have no account?</h3>
        <Link
          className="leading-10 px-6 text-lg shadow-lg bg-white rounded-md"
          href="?auth=sign-up"
          shallow
        >
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
