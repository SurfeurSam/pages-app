import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styles from './PostPage.module.css';
import { get } from '../../../api/api';
import { Link } from 'react-router-dom';

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const getPost = useCallback(async () => {
    const fetchPost = await get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setPost(fetchPost);
  }, [id]) 

  const getComments = useCallback(async () => {
    const fetchComments = await get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    setComments(fetchComments);
  }, [id])

  useEffect(() => {
    getPost();
    getComments();
  }, [getPost, getComments, id]);

  if (!post) return <div>Идет загрузка</div>;

  return (
    <div className={styles.container}>
      <Link to="/">Назад</Link>
      <div className={styles.title}>{post.title}</div>
      <p className={styles.post}>{post.body}</p>
      <span className={styles.sub}>Комментарии:</span>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <span className={styles.commentTitle}>{comment.name}</span>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostPage;