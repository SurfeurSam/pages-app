import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './PostListPage.module.css';
import { get } from '../../../api/api';

function PostListPage() {
  const [posts, setPosts] = useState([]);
  console.log("🚀🚀🚀 ~ PostListPage ~ posts:", posts)
  
  const getPosts = async () => {
    const fetchPosts = await get('https://jsonplaceholder.typicode.com/posts');
    setPosts(fetchPosts);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Список новостей</h1>
      <div className={styles.list}>
        {posts.map(post => (
          <div className={styles.cell} key={post.id}>
            {post.title}
            <Link to={`/posts/${post.id}`} className={styles.link}>
              Open
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostListPage;