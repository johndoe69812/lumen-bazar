import { City } from "@/types/location";
import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";

const useCitiesList = (searchString: string) => {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async (searchString: string) => {
    const url = `/api/search-cities?q=${searchString}`;

    setIsLoading(true);

    try {
      const resp = await fetch(url);
      const json: { cities: City[] } = await resp.json();

      if (json.cities) return setCities(json.cities);
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
