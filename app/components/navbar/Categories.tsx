"use client";

import { usePathname, useSearchParams } from "next/navigation";

import Container from "../Container";
import CategoryBox from "../CategoryBox";

export const categories = [
  {
    label: "Compact",
    image: "/images/compact.jpg",
    description:
      "Compact cars offer great gas mileage and the ease of driving and parking in high traffic areas.",
  },
  {
    label: "Pick-up",
    image: "/images/pickup.jpg",
    description:
      "A pickup truck rental has the space, power, and durability to for the job.",
  },
  {
    label: "suv",
    image: "/images/suv.jpg",
    description:
      "A standard SUV rental provides plenty of room for passengers and luggage. SUVs are great for business, leisure, or weekend road trips.",
  },
  {
    label: "minivan",
    image: "/images/minivan.jpg",
    description:
      "Eight passenger minivan rentals are great for traveling with a large group whether it's for a family vacation or business trip.",
  },
  {
    label: "offroad",
    image: "/images/offroad.jpg",
    description:
      "Enjoy the flexibility with plenty of space for passengers and cargo. And embark on your next adventure.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-0
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            image={item.image}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
