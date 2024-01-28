import { ALL_CITIES } from "@/mock-data/addresses/cities";
import { ALL_COUNTRIES } from "@/mock-data/addresses/countries";
import { City } from "@/types/location";
import { NextResponse } from "next/server";

const MAX_CITIES_COUNT = 10;

type ResponseType = {
  cities: City[];
};

const getCityId = (name: string) => {
  return name.trim().toLowerCase().replaceAll(" ", "_");
};

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const searchQuery = searchParams.get("q");

  if (!searchQuery) {
    return NextResponse.json(
      {
        error: "Nothing provided",
      },
      { status: 500 }
    );
  }

  const loweredQuery = searchQuery.toLowerCase();
  let foundCities = ALL_CITIES.filter(
    (item) => item.name.toLowerCase().indexOf(loweredQuery) !== -1
  );

  if (foundCities.length > MAX_CITIES_COUNT) {
    foundCities.length = MAX_CITIES_COUNT;
  }

  const resp: ResponseType = {
    cities: foundCities.map((city) => ({
      ...city,
      id: getCityId(city.name),
      country:
        ALL_COUNTRIES.find((country) => country.code === city.country)?.name ??
        "global",
    })),
  };

  return NextResponse.json(resp);
}
