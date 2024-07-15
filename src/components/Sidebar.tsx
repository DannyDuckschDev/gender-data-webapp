// src/components/Sidebar.tsx

import React from "react";
import MediaTypeList from "./MediaTypeList";
import CategoryList from "./CategoryList";

interface SidebarProps{
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    categories: string[];
    currentCategory: string;
    setCurrentCategory: (category: string) => void;
    resetFilters: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    isSidebarOpen,
    toggleSidebar,
    categories,
    currentCategory,
    setCurrentCategory,
    resetFilters,
}) => {
    return(
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}>×</button>
            <h2>Media Types</h2>
            <MediaTypeList />
            <h2>Categories</h2>
            <CategoryList
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
            />
            <button className="reset-btn" onClick={resetFilters}>Reset</button>
        </div>
    );
};

export default Sidebar;