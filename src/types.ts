export interface Book {
    author: string;
    title: string;
    cover_url: string;
    shopping_url: string;
    publication_year: number;
}

export interface Article {
    author: string;
    date: string;
    image_url: string;
    url: string;
}

export interface Video {
    channel: string;
    platform: string;
    date: string;
    url: string;
}

export interface Content {
    id: number;
    name: string;
    category: string[];
    types: string[];
    book?: Book;
    article?: Article;
    video?: Video;
}
