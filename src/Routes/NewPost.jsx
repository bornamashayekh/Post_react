
import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link , Form ,redirect} from 'react-router-dom';
function NewPost({ onAddPost}) {

  return (
    <Modal>
    <Form method="post" className={classes.form} >
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} name='body'/>
          </p>
          
      <p>
        <label htmlFor="name" >Your name</label>
        <input type="text" id="name" required name='author'  />
      </p>
      <p className={classes.actions}>
  
        <Link type="button" to="..">Cancel</Link>
        <button type="submit">Add Post</button>
      </p>
      </Form>
      </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);//this add all the form data to an object like this {body: '...', author: '...'}
  // formData.get('body');
  // formData.get('author');
   await fetch('http://localhost:8080/posts', { 
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
    body: JSON.stringify(postData), //convert the object to a string
  });
return redirect('/'); //redirect to the posts page after adding the post
  }