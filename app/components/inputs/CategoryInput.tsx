"use client";

import Image from "next/image";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  image: string;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  image,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${selected ? "border-black" : "border-neutral-200"}
      `}
    >
      <Image
        className="rounded-full"
        height="75"
        width="75"
        alt="Icon"
        src={image}
      />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryBox;
