import Post from "./Post";
import styles from "./PostsLists.module.css";

function PostsList({ posts }) {
  if (!posts) {
    return <p style={{ textAlign: "center", color: "white" }}>Loading posts...</p>;
  }

  if (posts.length === 0) {
    return (
      <div style={{ textAlign: "center", color: "white" }}>
        <h2>There are no posts yet!</h2>
        <p>Start adding some posts!</p>
      </div>
    );
  }

  return (
    <ul className={styles.posts}>
      {posts.map((post, index) => (
        <Post key={index} author={post.author} body={post.body} />
      ))}
    </ul>
  );
}

export default PostsList;
