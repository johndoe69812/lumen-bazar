import { Api, ListOfCountriesResponse } from "@/api";
import APIService from "@/api/api-service";
import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";

const useCitiesList = (searchString: string) => {
  const [cities, setCities] = useState<ListOfCountriesResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async (searchString: string) => {
    setIsLoading(true);

    try {
      const resp = await APIService.api.locationsServiceFindCity(searchString);

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
