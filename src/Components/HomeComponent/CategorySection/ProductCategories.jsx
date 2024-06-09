import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, [categories]);
  return (
    <div className="my-10">
      <h2 className="my-10 text-center text-pink-500 text-3xl">
        Product Categories
      </h2>
      <dir className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {categories && categories.map((category) => (
            <CategoryCard key={category._id} category={category}></CategoryCard>
          ))}
        </div>
      </dir>
    </div>
  );
};

export default ProductCategories;
