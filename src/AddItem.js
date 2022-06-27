import React, { useState } from 'react';
import './style.css';

export default function AddItem(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function addItem(e) {
    e.preventDefault();
    props.posts;
  }

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
      </form>
    </div>
  );
}
