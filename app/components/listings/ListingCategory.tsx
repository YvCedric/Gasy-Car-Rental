"use client";

import Image from "next/image";

interface CategoryViewProps {
  image: string;
  label: string;
  description: string;
}

const CategoryView: React.FC<CategoryViewProps> = ({
  image,
  label,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Image
          src={image}
          width={40}
          height={40}
          alt="icons"
          className="text-neutral-600"
        />
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{label}</div>
          <div className="text-neutral-500 font-light">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
