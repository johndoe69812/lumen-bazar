"use client";

import { Formik } from "formik";
import SelectCategory from "../select-category";
import Input from "@/shared/components/form/input";
import { SelectField } from "@/shared/components/form/select";
import Button from "@/shared/components/button";
import { brandList } from "./brands.stub";

type Props = {
  categoryId: string;
};

const AdBuilder = (props: Props) => {
  const { categoryId } = props;

  if (!categoryId) {
    return null;
  }

  return (
    <div>
      <Formik
        initialValues={{
          brand: "bmw",
        }}
        onSubmit={(values) => {
          console.log("values", values);
        }}
      >
        {({ errors, touched, submitForm }) => (
          <div className="flex flex-col gap-4">
            <SelectCategory />
            <SelectField name="brand" options={brandList} />
            <Button type="submit" onClick={submitForm}>
              Submit
            </Button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AdBuilder;
