// src/hooks/useToggleExpand.ts

import { useState } from "react";

// Custom hook to manage the expanded state of items
const useToggleExpand = () => {
    // State to track the expanded state of multiple items
    const [isExpanded, setIsExpanded] = useState<{ [key: string]: boolean}>({});

    // Function to toggle the expanded state of a specific item
    const toggleExpand = (key: string) => {
        // Update the state by toggling the boolean value for the given key
        setIsExpanded(prevState => ({ ...prevState, [key]: !prevState[key] }));
    };

    return {
        isExpanded, // Return the current expanded state
        toggleExpand, // Return the function to toggle the expanded state
    };
};

export default useToggleExpand;