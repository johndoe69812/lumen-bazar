import PageHeadline from "./shared/components/page-headline";
import { FC } from "react";

const DashboardPage: FC = () => {
  return (
    <div className="pt-6 pb-2 px-6">
      <PageHeadline title="Dashboard" />
    </div>
  );
};

export default DashboardPage;
