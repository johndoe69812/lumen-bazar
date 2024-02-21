import AdWizard from "@/modules/create-ad/ad-wizard";
import Heading from "@/shared/components/heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumen Bazar - Post your Advertisement",
};

const CreateAdPage = () => {
  return (
    <div>
      <Heading variant="h2">Category</Heading>
      <AdWizard categoryId="cars" />
    </div>
  );
};

export default CreateAdPage;
