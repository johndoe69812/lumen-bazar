import { AdParamSchema } from "@/api";
import APIService from "@/api/api-service";
import { useQuery } from "@tanstack/react-query";

export const useAllParams = () => {
  return useQuery<AdParamSchema[]>({
    queryKey: ["all-ad-params"],
    queryFn: () => {
      return APIService.api.adsServiceGetAllParameters();
    },
  });
};
