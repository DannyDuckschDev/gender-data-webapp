// src/pages/Forum.tsx
import React, {useState} from "react";
import ForumPost from '../components/ForumPost';
import ForumForm  from '../components/ForumForm';

interface Post {
    content: string;
    date: Date;
}

const Forum: React.FC = () =>  {
    const [posts, setPosts] = useState<Post[]>([]);

    const addPost = (post: Post) => {
        setPosts([post, ...posts]);
    };

    return (
        <div>
            <h1>Forum</h1>
            <ForumForm addPost={addPost} />
            {posts.map((post, index) => (
                <ForumPost key={index} post={post} />
            ))}
        </div>
    );
};

export default Forum;