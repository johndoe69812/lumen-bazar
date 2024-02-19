"use client";

import { AdCategorySchema } from "@/api";
import APIService from "@/api/api-service";
import { useEffect, useState } from "react";

const ApiEndpoints = {
  general: {
    endpoint: APIService.api.adsServiceGetGeneralCategories,
    cancelToken: "generalCategories",
  },
  all: {
    endpoint: APIService.api.adsServiceGetAllCategories,
    cancelToken: "allCategories",
  },
  flat: {
    endpoint: APIService.api.adsServiceGetFlatCategories,
    cancelToken: "flatCategories",
  },
};

const useAllCategories = (
  onlyGeneral: boolean = true,
  flat: boolean = false
) => {
  const [allCategories, setAllCategories] = useState<AdCategorySchema[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const endpointKey = flat ? "flat" : onlyGeneral ? "general" : "all";

  useEffect(() => {
    const { cancelToken, endpoint } = ApiEndpoints[endpointKey];

    const sendRequest = async () => {
      setIsLoading(true);

      try {
        const categories = await endpoint({ cancelToken });
        if (categories) return setAllCategories(categories);
      } finally {
        setIsLoading(false);
      }
    };

    sendRequest();

    return () => {
      APIService.http.abortRequest(cancelToken);
    };
  }, [endpointKey]);

  return {
    allCategories,
    isLoading,
  };
};

export default useAllCategories;
