import AdWizard from "@/modules/create-ad/ad-wizard";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Lumen Bazar - Post your Advertisement",
};

const CreateAdPage: FC = () => {
  return (
    <div>
      <AdWizard categoryId="cars" />
    </div>
  );
};

export default CreateAdPage;
