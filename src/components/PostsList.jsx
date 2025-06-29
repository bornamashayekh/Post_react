import Post from "./post";
import styles from "./PostsLists.module.css";

function PostsList() {
  return (
      <ul className={styles.posts}>
           <Post author="Borna" body="react is easy" />
    <Post author="Ali" body="react is easy" />

   </ul>
  );
}
export default PostsList;