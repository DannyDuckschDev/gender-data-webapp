// src/components/CategoryList.tsx

import React from 'react';

interface CategoryListProps {
  categories: string[];
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  currentCategory,
  setCurrentCategory,
}) => {
  return (
    <ul>
      {categories.map(category => (
        <li key={category} className={currentCategory === category ? 'active' : ''}>
          <a href="#" onClick={() => setCurrentCategory(category)}>
            {category}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
