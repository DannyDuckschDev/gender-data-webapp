// src/components/ForumForm.tsx
import React, {useState} from "react";

interface ForumFormProps {
    addPost: (post: { content: string, date: Date}) => void;
}

const ForumForm: React.FC<ForumFormProps> = ({ addPost}) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        addPost({content, date: new Date() });
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Teile deine Erfahrungen..." />
                <button type="submit">Posten</button>
        </form>
    );
};

export default ForumForm;