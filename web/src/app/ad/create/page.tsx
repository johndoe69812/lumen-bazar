import AdWizard from "@/modules/create-ad/ad-wizard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumen Bazar - Post your Advertisement",
};

const CreateAdPage = () => {
  return (
    <div>
      <AdWizard categoryId="cars" />
    </div>
  );
};

export default CreateAdPage;
