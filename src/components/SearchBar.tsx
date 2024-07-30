// src/component/Searchbar.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// Define the props interface for the SearchBar component
interface SearchBarProps{
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

// Functional component for the search bar
const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        // Container for the search bar and icon
        <div className="search-bar-container">
            <input 
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
        </div>
        
    );
};

export default SearchBar;