// src/components/Sidebar.tsx

import React from "react";
import MediaTypeList from "./MediaTypeList";
import CategoryList from "./CategoryList";

// Define the props interface for the Sidebar component
interface SidebarProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    categories: string[];
    currentCategory: string;
    setCurrentCategory: (category: string) => void;
    resetFilters: () => void;
    currentMediaType: string;
    setCurrentMediaType: (type: string) => void;
}

// Functional component for the sidebar
const Sidebar: React.FC<SidebarProps> = ({
    isSidebarOpen,
    toggleSidebar,
    categories,
    currentCategory,
    setCurrentCategory,
    resetFilters,
    currentMediaType,
    setCurrentMediaType
}) => {
    return (
        // Sidebar container with conditional class for open state
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}>×</button>
            <h2>Media Types</h2>
            <MediaTypeList 
                currentMediaType={currentMediaType} 
                setCurrentMediaType={setCurrentMediaType} 
            />
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
