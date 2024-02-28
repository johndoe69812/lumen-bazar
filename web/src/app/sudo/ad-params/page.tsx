import APIService from "@/api/api-service";
import Heading from "@/shared/components/heading";
import AllParameters from "./all-params/all-parameters";
import ParamOptions from "./param-options/param-options";

const getData = async () => {
  APIService.http.baseUrl = "http://nest-api:3000";
  const adParams = await APIService.api.adsServiceGetAllParameters();

  return {
    adParams,
  };
};

const AdParamsPage = async () => {
  const { adParams } = await getData();

  return (
    <div className="flex flex-col gap-4">
      <div className="card">
        <Heading variant="h2">All Ad Parameters</Heading>
        <AllParameters />
      </div>
      <div className="card">
        <Heading variant="h2">All Parameter Options</Heading>
        <ParamOptions />
      </div>
    </div>
  );
};

export default AdParamsPage;
