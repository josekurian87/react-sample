import React, { useState } from 'react';
import './style.css';

export default function ItemList(props) {
  const [posts, setPosts] = useState(props.posts);
  return (
    <div>
      {posts.map((p) => (
        <p>
          {p.id} {p.title}
          <br />
          {p.content}
        </p>
      ))}
    </div>
  );
}
