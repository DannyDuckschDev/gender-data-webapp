import React from "react";

interface SearchBarProps{
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search-bar-container">
            <input 
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
            />
            <span className="search-icon">🔍</span>
        </div>
        
    );
};

export default SearchBar;