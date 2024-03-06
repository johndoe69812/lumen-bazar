import APIService from "@/api/api-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import { queryKey } from "./use-flat-categories";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (categoryId: number) =>
      APIService.api.adsServiceDeleteCategory(categoryId),

    onError: () => {
      notification.error({
        message: "Error",
        description: "While deleting a new category",
      });
    },

    onSuccess: () => {
      notification.success({
        message: "Success!",
        description: "Category was deleted!",
      });
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });
};
