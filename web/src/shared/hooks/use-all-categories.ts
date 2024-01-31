"use client";
import { Category } from "@/mock-data/categories/type";
import { useEffect, useState } from "react";

const url = `/api/ads/categories/all`;

const useAllCategories = () => {
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const sendRequest = async () => {
      setIsLoading(true);

      try {
        const resp = await fetch(url, { signal: abortController.signal });
        const json = await resp.json();

        if (json && json.length > 0) return setAllCategories(json);
      } finally {
        setIsLoading(false);
      }
    };

    sendRequest();

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    allCategories,
    isLoading,
  };
};

export default useAllCategories;
