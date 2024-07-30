// src/hooks/useCategories.ts

import { useState, useEffect } from "react";
import { Content } from "../types";

const useCategories = (contents: Content[]) => {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const extractCategories = (contents: Content[]): string[] => {
            const categoriesSet = new Set<string>();
            contents.forEach(content => {
                content.category.forEach(cat => categoriesSet.add(cat));
            });
            return Array.from(categoriesSet);
        };

        setCategories(extractCategories(contents));
    }, [contents]);

    return categories;
};

export default useCategories;