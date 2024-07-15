// src/types.ts

// Interface for book information for Knowledge.tsx
export interface Book {
    author: string; // Author of the book
    title: string; // Title of the book
    cover_url: string; // URL to the cover image of the book
    shopping_url: string; // URL to purchase the book
    publication_year: number; // Year of publication
    excerpt: string;
    description: string;
}

// Interface for article information for Knowledge.tsx
export interface Article {
    author: string; // Author of the article
    date: string; // Date of publication
    image_url: string; // URL to the article image
    url: string; // URL to read the article
    excerpt: string;
    description: string;
}

// Interface for video information for Knowledge.tsx
export interface Video {
    channel: string; // Channel where the video is published
    platform: string; // Platform where the video is hosted
    date: string; // Date of publication
    url: string; // URL to watch the video
    excerpt: string;
    description: string;
}

export interface Content{
    id: number;
    name: string;
    category: string[];
    types: string[];
    book?: Book;
    article?: Article;
    video?: Video; 

}

export interface ContentItem {
    key: string;
    label: string;
    type: 'download' | 'link';
}

export interface DownloadItem extends ContentItem{
    type: 'download';
    description: string;
    ingredients: string[];
    preparation: string;
    url: string;
    additionalDownload?: {
        label: string;
        url: string;
    };
}

export interface Phase{
    name: string;
    description: string;
}

export interface Detail{
    title: string;
    content: string;
    phases?: Phase[];
}

export interface LinkItem extends ContentItem{
    type: 'link';
    description: string;
    url: string;
    iosUrl?: string;
    androidUrl?: string;
    details?: Detail[];
}

export interface Section{
    title: string;
    items: ContentItem[];
}

export interface ContentData{
    sections: Section[];
}