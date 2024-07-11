// src/types.ts

// Interface for book information for Knowledge.tsx
export interface Book {
    author: string; // Author of the book
    title: string; // Title of the book
    cover_url: string; // URL to the cover image of the book
    shopping_url: string; // URL to purchase the book
    publication_year: number; // Year of publication
}

// Interface for article information for Knowledge.tsx
export interface Article {
    author: string; // Author of the article
    date: string; // Date of publication
    image_url: string; // URL to the article image
    url: string; // URL to read the article
}

// Interface for video information for Knowledge.tsx
export interface Video {
    channel: string; // Channel where the video is published
    platform: string; // Platform where the video is hosted
    date: string; // Date of publication
    url: string; // URL to watch the video
}

// Interface for general content which can include books, articles, or videos
export interface Content {
    id: number; // Unique identifier for the content
    name: string; // Name of the content
    category: string[]; // Categories the content belongs to
    types: string[]; // Types of content (e.g., "Book", "Article", "Video")
    book?: Book; // Optional book information
    article?: Article; // Optional article information
    video?: Video; // Optional video information
}

// Interface for additional download information
export interface AdditionalDownload {
    label: string; // Label for the additional download button
    url: string; // URL for the additional downloadable file
}

// Interface for download item
export interface DownloadItem {
    type: 'download'; // Type of content (download)
    key: string; // Unique key for the download item
    label: string; // Label for the download button
    description?: string; // Optional description of the download item
    ingredients?: string[]; // Optional list of ingredients for the download item
    preparation?: string; // Optional preparation instructions for the download item
    url: string; // URL to the downloadable file
    additionalDownload?: AdditionalDownload; // Optional additional download information
}

// Interface for link item
export interface LinkItem {
    type: 'link'; // Type of content (link)
    key: string; // Unique key for the link item
    label: string; // Label for the link button
    description?: string; // Optional description of the link item
    url: string; // URL to the website
}

// Type definition for content item which can be either a download or a link
export type ContentItem = DownloadItem | LinkItem;

// Interface for section which contains a title and a list of content items
export interface Section {
    title: string; // Title of the section
    items: ContentItem[]; // List of content items in the section
}

// Interface for the entire content data structure
export interface ContentData {
    sections: Section[]; // List of sections in the content data
}
