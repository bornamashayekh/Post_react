import { useState } from 'react';
import classes from './NewPost.module.css';


function NewPost({ onAddPost, onCancel}) {
  const [enteredBody, setEnteredBody] = useState(""); // Importing useState to manage state, but not using it here
  const [enteredAuthor, setEnteredAuthor] = useState("");
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
          </p>
          
      <p>
        <label htmlFor="name" >Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
  
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Add Post</button>
      </p>
    </form>
  );
}

export default NewPost;