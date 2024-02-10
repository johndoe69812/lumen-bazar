import apiClient from "@/api/api-client";
import { ListOfCountriesResponse } from "@/api/data-contracts";
import { City } from "@/types/location";
import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";

const useCitiesList = (searchString: string) => {
  const [cities, setCities] = useState<ListOfCountriesResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async (searchString: string) => {
    setIsLoading(true);

    try {
      const resp = await apiClient.locationsControllerFindCity(searchString);

      if (resp && resp.length > 0) return setCities(resp);
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedSendRequest = useMemo(() => {
    return debounce(sendRequest, 200);
  }, []);

  useEffect(() => {
    if (searchString.length < 2) {
      setCities([]);
      setIsLoading(false);
      return;
    }

    debouncedSendRequest(searchString);

    return () => {
      debouncedSendRequest.cancel();
    };
  }, [searchString, debouncedSendRequest]);

  return {
    cities,
    isLoading,
  };
};

export default useCitiesList;
