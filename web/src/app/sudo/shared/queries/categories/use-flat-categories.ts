import { AdCategorySchema } from "@/api";
import APIService from "@/api/api-service";
import { useQuery } from "@tanstack/react-query";

export const queryKey = "all-flat-categories";

export const useFlatCategories = () => {
  return useQuery<AdCategorySchema[]>({
    queryKey: [queryKey],
    queryFn: () => {
      return APIService.api.adsServiceGetFlatCategories();
    },
  });
};
