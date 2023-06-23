import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PostList from './post/PostList';
import PostCreate from './post/PostCreate';
import PostUpdate from './post/PostUpdate';
import PostRead from './post/PostRead';

function App() {
  return (
    <Routes>
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/:id" element={<PostRead />} />
      <Route path="/posts/create" element={<PostCreate />} />
      <Route path="/posts/edit/:id" element={<PostUpdate />} />
    </Routes>
  );
}

export default App;
