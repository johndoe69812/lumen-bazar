import { CategoryCard } from "./types";

export const PLACEHOLD_CATEGORIES: CategoryCard[] = [
  {
    id: "cars",
    title: "Cars",
    image: "cat_vehicle.png",
    link: "/cars",
  },
  {
    id: "estate",
    title: "Real Estate",
    image: "cat_estate.png",
    link: "/estate",
  },
  {
    id: "jobs",
    title: "Jobs",
    image: "cat_jobs.png",
    link: "/jobs",
  },
  {
    id: "clothes",
    title: "Clothes",
    image: "cat_clothes.png",
    link: "/clothes",
  },
  {
    id: "hobby-and-outdoor",
    title: "hobby & outdoor",
    image: "cat_hobby.png",
    link: "/hobby",
  },
  {
    id: "pet",
    title: "For pets",
    image: "cat_pets.png",
    link: "/pet",
  },
  {
    id: "business",
    title: "For business",
    image: "cat_business.png",
    link: "/business",
  },
  {
    id: "services",
    title: "Services",
    image: "cat_services.png",
    link: "/services",
  },
  {
    id: "electronics",
    title: "Electronics",
    image: "cat_electronics.png",
    link: "/electronics",
  },
  {
    id: "home-care",
    title: "Home Care Goods",
    image: "cat_homecare.png",
    link: "/home-care",
  },
  {
    id: "autoparts",
    title: "Autoparts",
    image: "cat_autoparts.png",
    link: "/autoparts",
  },
  {
    id: "for-kids",
    title: "For kids",
    image: "cat_kids.png",
    link: "/kids",
  },
  {
    id: "apartment-rental",
    title: "Apartment rental",
    image: "cat_rental.png",
    link: "/rental",
  },
  {
    id: "self-care",
    title: "Self Care",
    image: "cat_selfcare.png",
    link: "/self-care",
  },
].map((item) => ({
  ...item,
  image: `${process.env.NEXT_PUBLIC_HOSTNAME}/${item.image}`,
}));
