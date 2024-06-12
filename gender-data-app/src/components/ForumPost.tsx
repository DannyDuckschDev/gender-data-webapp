// src/components/ForumPost.tsx

import React from "react";

interface Post {
    content: string;
    date: Date;
}

interface ForumPostProps {
    post: Post;
}

const ForumPost: React.FC<ForumPostProps> = ({ post }) => {
    return (
        <div>
            <p> {post.content} </p>
            <small> {post.date.toString()} </small>
        </div>
    );
};

export default ForumPost;