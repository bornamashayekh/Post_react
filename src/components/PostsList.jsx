import { useState, useEffect } from "react";
import Post from "./Post";
import styles from "./PostsLists.module.css";
import { useLoaderData } from "react-router-dom";
function PostsList({ }) {
  
  const [isFetching,setIsFetching]=useState(false);
  const [error,setError]=useState(null);
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     setError(null);
  //     try {
  //       const response = await fetch("http://localhost:8080/posts");
  //       const resData = await response.json();
        
  //       setPosts(resData.posts);
  //     } catch (err) {
  //       console.error("Fetch posts error:", err);
  //       setError(err.message);
  //     }
  //     setIsFetching(false);
  //   }
  //   fetchPosts();
  // }, []); 
  function addPostHandller(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    setPosts((existingPost) => [postData, ...existingPost]);
  }
  let modalContent;
 
 
  return (
    <>
      {modalContent}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          loading...
        </div>
      )}
      {error && (
        <div style={{ textAlign: "center", color: "red" }}> {error} </div>
      )}
      {!isFetching && !error && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && !error && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet!</h2>
          <p>Start adding some posts!</p>
        </div>
      )}
    </>
  );
}
export default PostsList;
