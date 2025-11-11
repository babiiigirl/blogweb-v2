import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

   useEffect(() => {
    fetch(`http://localhost:8080/posts/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Post not found");
        return res.json();
      })
      .then(data => setPost(data))
      .catch(err => console.error(err.message));
  }, [id]);

  return (
    <div>
      <h3>{post?.title}</h3>
      <p>{post?.description}</p>
    </div>
  );
}