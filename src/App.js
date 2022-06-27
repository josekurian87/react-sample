import React from 'react';
import './style.css';
import ItemList from './ItemList';
import AddItem from './AddItem';

export default function App() {
  const postsMock = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    {
      id: 2,
      title: 'Installation',
      content: 'You can install React from npm.',
    },
  ];

  return (
    <div>
      <ItemList posts={postsMock} />
      <AddItem posts={postsMock} />
    </div>
  );
}
