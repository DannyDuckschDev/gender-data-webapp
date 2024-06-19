export interface Book {
    author: string;
    title: string;
    shopping_url: string;
    publication_year: number;
}

export interface Article {
    author: string;
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
}
