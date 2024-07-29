// src/types.ts

// Interface for Blogposts on Home.tsx:
export interface BlogPost {
    id: number; // Unique identifier for the blog post
    name: string; // Name of the blog post
    category: string[]; // Categories the blog post belongs to
    type: string; // Type of the blog post
    icon: string; // Icon representing the blog post
    article?: { // Optional article details if the blog post is an article
        author: string; // Author of the article
        date: string; // Date of publication
        image_url: string; // URL to the article image
        url: string; // URL to read the article
        excerpt: string; // Excerpt from the article
        description: string; // Description of the article
    };
    book?: { // Optional book details if the blog post is a book
        author: string; // Author of the book
        title: string; // Title of the book
        cover_url: string; // URL to the cover image of the book
        shopping_url: string; // URL to purchase the book
        publication_year: string; // Year of publication
        excerpt: string; // Excerpt from the book
        description: string; // Description of the book
    };
    video?: { // Optional video details if the blog post is a video
        channel: string; // Channel where the video is published
        platform: string; // Platform where the video is hosted
        date: string; // Date of publication
        url: string; // URL to watch the video
        thumbnail: string; // Thumbnail image of the video
        excerpt: string; // Excerpt from the video
        description: string; // Description of the video
    };
}

// Interface for book information for Knowledge.tsx
export interface Book {
    author: string; // Author of the book
    title: string; // Title of the book
    cover_url: string; // URL to the cover image of the book
    shopping_url: string; // URL to purchase the book
    publication_year: string; // Year of publication
    excerpt: string; // Excerpt from the book
    description: string; // Description of the book
}

// Interface for article information for Knowledge.tsx
export interface Article {
    author: string; // Author of the article
    date: string; // Date of publication
    image_url: string; // URL to the article image
    url: string; // URL to read the article
    excerpt: string; // Excerpt from the article
    description: string; // Description of the article
}

// Interface for video information for Knowledge.tsx
export interface Video {
    channel: string; // Channel where the video is published
    platform: string; // Platform where the video is hosted
    date: string; // Date of publication
    url: string; // URL to watch the video
    thumbnail: string; // Thumbnail image of the video
    excerpt: string; // Excerpt from the video
    description: string; // Description of the video
}

// Interface for general content
export interface Content {
    id: number; // Unique identifier for the content
    name: string; // Name of the content
    category: string[]; // Categories the content belongs to
    type: string; // Type of content (book, article, video)
    book?: Book; // Optional book details if the content is a book
    article?: Article; // Optional article details if the content is an article
    video?: Video; // Optional video details if the content is a video
    isHighlightedCategory?: boolean; // Optional property to track if category is highlighted
}

// Interface for content item
export interface ContentItem {
    key: string; // Unique key for the content item
    label: string; // Label for the content item
    type: 'download' | 'link'; // Type of the content item (download or link)
}

// Interface for download item, extending content item
export interface DownloadItem extends ContentItem {
    type: 'download'; // Type is fixed to 'download'
    description: string; // Description of the download item
    ingredients: string[]; // List of ingredients for the download item
    preparation: string; // Preparation steps for the download item
    url: string; // URL to download the item
    additionalDownload?: { // Optional additional download information
        label: string; // Label for the additional download
        url: string; // URL for the additional download
    };
}

// Interface for phase information in details
export interface Phase {
    name: string; // Name of the phase
    description: string; // Description of the phase
}

// Interface for detailed information
export interface Detail {
    title: string; // Title of the detail
    content: string; // Main content of the detail
    phases?: Phase[]; // Optional list of phases associated with the detail
}

// Interface for link item, extending content item
export interface LinkItem extends ContentItem {
    type: 'link'; // Type is fixed to 'link'
    description: string; // Description of the link item
    url: string; // URL of the link item
    iosUrl?: string; // Optional iOS URL for the link item
    androidUrl?: string; // Optional Android URL for the link item
    details?: Detail[]; // Optional list of detailed information associated with the link item
}

// Interface for section containing content items
export interface Section {
    title: string; // Title of the section
    items: ContentItem[]; // List of content items in the section
}

// Interface for content data containing multiple sections
export interface ContentData {
    sections: Section[]; // List of sections containing content items
}

// Interface for clinic information
export interface Clinic {
    position: [number, number]; // LatLngTuple for clinic location
    name: string; // Name of the clinic
    address: string; // Address of the clinic
    url: string; // URL to the clinic's website
    hours: string; // Opening hours of the clinic
}

// Interface for support card information
export interface SupportCard {
    id: string; // Unique identifier for the card
    title: string; // Title of the support card
    icon: string; // Icon representing the support card
    content: string; // Main content of the support card
    buttonText: string; // Text for the button
    buttonLink: string; // URL the button links to
}
