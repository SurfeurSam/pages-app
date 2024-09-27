import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostListPage from './components/pages/PostListPage/PostListPage';
import PostPage from './components/pages/PostPage/PostPage';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostListPage />} />
          <Route path="posts/:id" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
