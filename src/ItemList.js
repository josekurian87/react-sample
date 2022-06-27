import React, { useState } from 'react';
import './style.css';

export default function ItemList(props) {
  return (
    <div>
      {props.posts.map((p) => (
        <p>
          {p.id} {p.title}
          <br />
          {p.content}
        </p>
      ))}
    </div>
  );
}
