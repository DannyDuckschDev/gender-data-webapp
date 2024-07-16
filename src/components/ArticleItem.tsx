// src/components/ArticleItem.tsx

import React from "react";
import { Content } from "../types";

interface ArticleItemProps {
    content: Content;
    isExpanded: boolean;
    toggleDescription: (id: number) => void;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ content, isExpanded, toggleDescription}) => {
    return (
        <div className="article-item">
            {content.article && (
                <>
                {content.article.image_url && <img src={content.article.image_url} alt={content.name} className="article-image" />}
                <div className="article-info">
                    <h3>{content.name}</h3>
                    <p><span>Author:</span> {content.article.author}</p>
                    <p><span>Date:</span> {content.article.date}</p>
                    <p>{content.article.excerpt}</p>
                    <button onClick={() => toggleDescription(content.id)} className="toggle-description-btn">
                    {isExpanded ? '▲' : '▼'} Read more
                    </button>
                    {isExpanded && <p>{content.article.description}</p>}
                    <a href={content.article.url} className="read-link" target="_blank">Read the full article</a>
                </div>
                </>
            )}
        </div>
    );
};

export default ArticleItem;