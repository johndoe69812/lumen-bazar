import { AdCategorySchema, AdParamSchema, CreateCategoryDTO } from "@/api";
import APIService from "@/api/api-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import { queryKey } from "./use-flat-categories";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (category: CreateCategoryDTO) =>
      APIService.api.adsServiceCreateCategory(category),

    onError: () => {
      notification.error({
        message: "Error",
        description: "While creating a new category",
      });
    },

    onSuccess: () => {
      notification.success({
        message: "Success!",
        description: "Category was added!",
      });
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });
};
