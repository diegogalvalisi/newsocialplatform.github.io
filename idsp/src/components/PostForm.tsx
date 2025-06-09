import React, { useState } from 'react';

const PostForm: React.FC<{ onPost: (content: string) => void }> = ({ onPost }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (content.trim()) {
            onPost(content);
            setContent('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's on your mind?"
                rows={4}
                required
            />
            <button type="submit">Post</button>
        </form>
    );
};

export default PostForm;