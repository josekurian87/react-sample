import React, { useState } from 'react';
import './style.css';

export default function AddItem(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState(props.posts);

  const addItem = (e) => {
    e.preventDefault();
    setPosts(...posts, { id: 3, title: title, content: content });
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Content:
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
