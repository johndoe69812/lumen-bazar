import { ParamOptionSchema } from "@/api/__generated__/generated-api";
import APIService from "@/api/api-service";
import { useQuery } from "@tanstack/react-query";

export const useAllOptions = () => {
  return useQuery<ParamOptionSchema[]>({
    queryKey: ["all-param-options"],
    queryFn: () => {
      return APIService.api.adsServiceGetAllParamOptions();
    },
  });
};
