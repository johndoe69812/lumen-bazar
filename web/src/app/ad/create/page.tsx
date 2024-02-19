import SelectCategory from "@/modules/create-ad/select-category";
import Heading from "@/shared/components/heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumen Bazar - Post your Advertisement",
};

const CreateAdPage = () => {
  return (
    <div>
      <Heading variant="h2">Category</Heading>
      <SelectCategory />
    </div>
  );
};

export default CreateAdPage;
