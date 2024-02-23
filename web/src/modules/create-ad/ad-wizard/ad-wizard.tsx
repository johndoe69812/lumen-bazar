"use client";

import { Formik } from "formik";
import { AiOutlineCamera } from "@react-icons/all-files/ai/AiOutlineCamera";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";

import SelectCategory from "../select-category";
import Input, { InputField } from "@/shared/components/form/input";
import { SelectField } from "@/shared/components/form/select";
import Button from "@/shared/components/button";
import { brandList } from "./brands.stub";
import { PropsWithChildren, useState } from "react";
import Heading from "@/shared/components/heading";
import clsx from "clsx";
import { Option } from "@/shared/components/form/select/types";
import RadioGroup from "@/shared/components/form/radio-group";

type Props = {
  categoryId: string;
};

const Row = (props: PropsWithChildren<{ title: string }>) => {
  const { children, title } = props;

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <div className="leading-8">{title}</div>
      </div>
      <div className="col-span-9 text-sm">{children}</div>
    </div>
  );
};

const Section = (props: PropsWithChildren<{ title: string }>) => {
  const { children, title } = props;

  return (
    <div>
      <Heading variant="h2">{title}</Heading>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
};

const MediaUploader = () => {
  return (
    <label className="w-24 h-20 flex justify-center items-center cursor-pointer border focus-within:ring hover:bg-gray-100">
      <input type="file" className="absolute opacity-0" />
      <span className="text-5xl text-blue-400">
        <AiOutlineCamera />
      </span>
    </label>
  );
};

const ColorSwatches = () => {
  const [activeIndex, setActiveIndex] = useState<number>();

  return (
    <div className="">
      <div className="flex gap-2">
        {colorsOptions.map(({ label, value }, index) => {
          const showBorder = value === "#fff";

          const extraStyle = showBorder ? { border: "1px solid #ddd" } : {};
          const isActive = activeIndex === index;

          return (
            <button
              key={index}
              title={label}
              className={clsx(
                "w-7 h-7 rounded-full cursor-pointer transition focus-visible:ring",
                !isActive && "hover:scale-105"
              )}
              style={{
                background: value as string,
                ...extraStyle,
              }}
              onClick={() =>
                setActiveIndex((prev) => (prev === index ? undefined : index))
              }
            >
              <div
                className={clsx(
                  "w-5 h-5 m-1 flex justify-center items-center text-xs transition scale-0 rounded-full bg-white",
                  isActive && "scale-100"
                )}
              >
                <FaCheck />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const colorsOptions: Option[] = [
  {
    label: "White",
    value: "#fff",
  },
  {
    label: "Silver",
    value:
      "linear-gradient(137.23deg, #A0A0A0 10.41%, #BBBBBB 26.75%, #C8C8C8 36.61%, #D7D7D7 44.49%, #E9E8E8 57.99%, #E9E9E9 63.45%, #A7A7A7 79.24%, #727171 87.65%, #CCCCCC 87.66%, #676767 87.66%)",
  },
  {
    label: "Gray",
    value: "#9C9C9C",
  },
  {
    label: "Black",
    value: "#292929",
  },
  {
    label: "Brown",
    value: "#805C3A",
  },
  {
    label: "Golden",
    value:
      "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
  },
  {
    label: "Beige",
    value: "#CEC4AD",
  },
  {
    label: "Red",
    value: "#F54043",
  },
  {
    label: "Burgundy",
    value: "#C71C3B",
  },
  {
    label: "Orange",
    value: "#FFB021",
  },
  {
    label: "Yellow",
    value: "#FFE433",
  },
  {
    label: "Green",
    value: "#1C8C38",
  },
  {
    label: "Blue",
    value: "#3264FA",
  },
  {
    label: "Violet",
    value: "#6A36E3",
  },
  {
    label: "Purple",
    value: "#c400aa",
  },
  { label: "Pink", value: "#FFA1EA" },
];

const years: Option[] = Array(70)
  .fill(null)
  .map((_, index) => ({
    label: (new Date().getFullYear() - index).toString(),
    value: new Date().getFullYear() - index,
  }));

const doors: Option[] = [
  {
    label: "2",
    value: 2,
  },
  {
    label: "3",
    value: 3,
  },
  {
    label: "4",
    value: 4,
  },
  {
    label: "5",
    value: 5,
  },
];

const engineOptions: Option[] = [
  {
    label: "Petrol",
    value: "petrol",
  },
  {
    label: "Diesel",
    value: "diesel",
  },
  {
    label: "Electric",
    value: "electric",
  },
];

const driveTrainOptions: Option[] = [
  {
    label: "AWD",
    value: "awd",
    tooltip: "all-wheel drive",
  },
  {
    label: "4WD",
    value: "4wd",
    tooltip: "four-wheel drive",
  },
  {
    label: "FWD",
    value: "fwd",
    tooltip: "front-wheel drive",
  },
  {
    label: "RWD",
    value: "rwd",
    tooltip: "rear-wheel drive",
  },
];

const steeringWheelOptions: Option[] = [
  {
    label: "Left",
    value: "left",
  },
  {
    label: "Right",
    value: "right",
  },
];

const transmissionOptions: Option[] = [
  {
    label: "Automatic (AT)",
    labelCompact: "AT",

    value: "at",
  },
  {
    label: "Manual Transmission (MT)",
    labelCompact: "MT",
    value: "mt",
  },
  {
    label: "Automated Manual Transmission (AM)",
    labelCompact: "AM",
    value: "am",
  },
  {
    label: "Continuously Variable Transmission (CVT)",
    labelCompact: "CVT",
    value: "cvt",
  },
];

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
          <div className="flex flex-col gap-12">
            <Section title="Category">
              <SelectCategory />
            </Section>

            <Section title="Appearance">
              <Row title="Photos">
                <MediaUploader />
              </Row>
              <Row title="Video link">
                <InputField
                  name="video"
                  placeholder="https://youtube.com/my-video"
                  className="pl-2 py-1 w-[400px] rounded border border-gray-300 focus-within:ring"
                />
              </Row>
              <Row title="Color">
                <ColorSwatches />
              </Row>
            </Section>

            <Section title="Registration data">
              <Row title="VIN or chassis number">
                <InputField
                  name="vin"
                  className="pl-2 py-1 w-[400px] rounded border border-gray-300 focus-within:ring"
                />
              </Row>
            </Section>

            <Section title="Specifications">
              <Row title="Manufacturer">
                <SelectField name="brand" options={brandList} isClearable />
              </Row>
              <Row title="Model">
                <InputField
                  name="model"
                  className="bg-stone-200 w-[200px] px-2 py-1 rounded-lg focus-within:ring"
                />
              </Row>
              <Row title="Production year">
                <SelectField name="year" options={years} isClearable />
              </Row>
              <Row title="Number of doors">
                <SelectField name="doors" options={doors} isClearable />
              </Row>
              <Row title="Drivetrain">
                <RadioGroup options={driveTrainOptions} />
              </Row>
              <Row title="Steering wheel">
                <RadioGroup options={steeringWheelOptions} />
              </Row>
              <Row title="Transmission">
                <RadioGroup options={transmissionOptions} />
              </Row>
              <Row title="Engine's type">
                <RadioGroup options={engineOptions} value="petrol" />
              </Row>
              <Row title="Engine's capacity">
                <InputField
                  name="enginePower"
                  className="bg-stone-200 w-[200px] px-2 py-1 rounded-lg focus-within:ring"
                />
              </Row>
              <Row title="Engine's power">
                <InputField
                  name="enginePower"
                  className="bg-stone-200 w-[200px] px-2 py-1 rounded-lg focus-within:ring"
                />
              </Row>
            </Section>

            <Section title="Options">
              <Row title="Engine's power">
                <InputField
                  name="enginePower"
                  className="bg-stone-200 w-[200px] px-2 py-1 rounded-lg focus-within:ring"
                />
              </Row>
            </Section>

            <footer className="py-4">
              <Button
                className="px-8 py-2 rounded transition font-medium bg-blue-500 text-white hover:bg-blue-600"
                type="submit"
                onClick={submitForm}
              >
                Continue
              </Button>
            </footer>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AdBuilder;
