import { City } from "@/types/location";
import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";

const useCitiesList = (searchString: string) => {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async (searchString: string) => {
    const url = `/api/locations/find-city/${searchString}`;

    setIsLoading(true);

    try {
      const resp = await fetch(url);
      const json: City[] = await resp.json();

      if (json && json.length > 0) return setCities(json);
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
