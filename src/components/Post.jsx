import styles from "./Post.module.css";

function Post(props) {//only one argument is passed, always an object
  return (
    <li className={styles.post}>
     
      <p className={styles.author}>Author: {props.author}</p>
      <p className={styles.text}> {props.body} </p>
    </li>
  );
}
export default Post;
// This component represents a single post. It includes a title, content, and author information.
