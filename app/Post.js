import React, { useState, useEffect } from 'react';

const Post = () => {
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    // Fetch the content of the specific blog post from the backend API
    // Replace the API_URL with the actual URL of the backend API and postId with the ID of the specific blog post
    import React, { useState, useEffect } from 'react';
    
    const Post = () => {
      const [postContent, setPostContent] = useState('');
    
      useEffect(() => {
        // Fetch the content of the specific blog post from the backend API
        // Replace the API_URL with the actual URL of the backend API and postId with the ID of the specific blog post
        fetch(`${API_URL}/posts/${postId}`)
          .then(response => response.json())
          .then(data => setPostContent(data.content));
      }, []);
    
      return (
        <main>
          {postContent && <p>{postContent}</p>}
        </main>
    };
    
    export default Post;
