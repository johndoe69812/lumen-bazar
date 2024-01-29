"use client";

import { FormEventHandler, useCallback, useRef, useState } from "react";
import { ModalOverlay, ModalWindow } from "@/shared/components/modal";
import Button from "@/shared/components/button";
import Input from "@/shared/components/form/input";
import useCitiesList from "./hooks/use-search-city";

type Props = {
  onClose: () => void;
  onSave: () => void;
};

const LocationModal = (props: Props) => {
  const { onClose, onSave } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [searchString, setSearchString] = useState("");
  const [selectedCity, setSelectedCity] = useState<string>();

  const { cities, isLoading } = useCitiesList(searchString);

  console.log("cities", cities);

  const handleSearchString: FormEventHandler<HTMLInputElement> = useCallback(
    async (e) => {
      const query = e.currentTarget.value;
      setSearchString(query);
    },
    []
  );

  return (
    <ModalOverlay onClose={onClose}>
      <ModalWindow className="h-[80vh]" size="lg" onClose={onClose}>
        <div className="p-6 h-full flex flex-col">
          <h2 className="mb-2 text-2xl font-semibold">
            Specify search location
          </h2>
          <div className="h-full flex flex-col gap-4 justify-between">
            <div>
              <Input
                ref={inputRef}
                name="location-search"
                className="w-full leading-8 pl-2 text-base rounded border border-neutral-400 hover:border-neutral-500 focus:ring"
                placeholder="City/Street or Postal"
                defaultValue={selectedCity}
                isLoading={isLoading}
                relyOnContext={false}
                isClearable
                onInput={handleSearchString}
              />
              {cities.length > 0 && (
                <div className="rounded-b border">
                  {cities.map((city, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-blue-100 focus-ring cursor-pointer transition"
                      onClick={() => {
                        if (!inputRef.current) return;

                        setSelectedCity(city.id);
                        setSearchString("");
                        inputRef.current.value = city.name;
                      }}
                    >
                      {city.name}
                      <span className="text-gray-500">
                        , {city.country.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex justify-end self-end">
              <Button
                className="leading-8 px-6 rounded transition text-white bg-blue-500 hover:bg-blue-600"
                isLoading={isLoading}
                onClick={onSave}
              >
                Show 25 advertisements
              </Button>
            </div>
          </div>
        </div>
      </ModalWindow>
    </ModalOverlay>
  );
};

export default LocationModal;
