// src/components/CategoryList.tsx

import React from 'react';

// Define the props interface for the CategoryList component
interface CategoryListProps {
  categories: string[];
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
}

// Functional component for the Categorylist
const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  currentCategory,
  setCurrentCategory,
}) => {
  return (
    // Render a list of categories
    <ul>
      {categories.map(category => (
         // Render each category as a list item
        <li key={category} className={currentCategory === category ? 'active-category' : ''}>
          {/* Clickable link to set the current category */}
          <a href="#" onClick={() => setCurrentCategory(category)}>
            {category}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
