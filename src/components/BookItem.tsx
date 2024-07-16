// src/components/BookItem.tsx

import React from "react";
import { Content } from "../types";

interface BookItemProps{
    content: Content;
    isExpanded: boolean;
    toggleDescription: (id: number) => void;
}

const BookItem: React.FC<BookItemProps> = ({content, isExpanded, toggleDescription}) => {
   return (
    <div className="book-item">
        {content.book && (
            <>
                {content.book.cover_url && <img src={content.book.cover_url} alt={content.name} className="book-cover" />}
                <div className="book-info">
                    <h3>{content.name}</h3>
                    <p><span>Author:</span> {content.book.author}</p>
                    <p><span>Title:</span> {content.book.title}</p>
                    <p><span>Publication Year:</span> {content.book.publication_year}</p>
                    <p>{content.book.excerpt}</p>
                    <button onClick={() => toggleDescription(content.id)} className="toggle-description-btn">
                    {isExpanded ? '▲' : '▼'} Read more
                    </button>
                    {isExpanded && <p>{content.book.description}</p>}
                    <a href={content.book.shopping_url} className="read-link" target="_blank">Buy this book</a>
                </div>
            </>
        )}
    </div>
   ); 
};

export default BookItem;