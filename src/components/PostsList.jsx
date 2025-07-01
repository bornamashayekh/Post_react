import { useState } from "react";
import Post from "./post";
import styles from "./PostsLists.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  function addPostHandller(postData) {
    setPosts((existingPost) => [postData, ...existingPost]);
  }
  let modalContent;
  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost onAddPost={addPostHandller} onCancel={onStopPosting} />
      </Modal>
    );
  }
  return (
    <>
      {modalContent}
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet!</h2>
          <p>Start adding some posts!</p>
        </div>
      )}
    </>
  );
}
export default PostsList;
