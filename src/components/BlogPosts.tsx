import React from "react";
import "../styles/blogPosts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faBook, faVideo, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { BlogPost } from "../types";

const iconMap: { [key: string]: IconDefinition } = {
    'file-art': faFileAlt,
    'book': faBook,
    'video': faVideo
};

interface BlogPostProps {
    posts: BlogPost[];
}

const BlogPosts: React.FC<BlogPostProps> = ({ posts }) => {
    return (
        <section className="blog-posts-section">
            <h2 className="section-title">What's New</h2>
            <div className="blog-posts-container">
                {posts.map((post) => (
                    <div key={post.id} className="blog-post-card">
                        <div className="icon-container">
                            <FontAwesomeIcon icon={iconMap[post.icon]} size="2x" />
                        </div>
                        <h3>{post.name}</h3>
                        <img
                            className={`image-blog-post ${post.book ? 'book-cover' : ''}`}
                            src={post.article?.image_url || post.book?.cover_url || post.video?.thumbnail}
                            alt={post.name}
                        />
                        <p>{post.article?.excerpt || post.book?.excerpt || post.video?.excerpt}</p>
                        <a href={`/knowledge?id=${post.id}`} className="read-more-button-landing-page">Read More on Knowledge</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogPosts;
