import axios from "axios";
import { useEffect, useState } from "react";

export default function Posts({ name, age }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => setPosts(res.data));
  });

  return (
    <>
      <h2>POSTS</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>
              <b>Title {post.id}</b>: {post.title}
            </p>
            <p>
              <b>Post</b>: {post.body}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
