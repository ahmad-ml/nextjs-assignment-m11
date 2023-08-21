import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the list of blog posts from the backend API and update the `posts` state variable
    // Replace the API_URL with the actual URL of the backend API
    fetch(actual_API_URL)
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <main>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
);

export default Blog;

