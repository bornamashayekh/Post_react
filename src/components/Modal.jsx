import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';
function Modal({ children }) {
  // The Modal component is a reusable component that displays a modal dialog.
  const navigate = useNavigate();
  function CloseHandller() {
   navigate('..')
  }
  return (
      <>
      <div className={classes.backdrop} onClick={CloseHandller}/>
          <dialog open className={classes.modal}>{children}</dialog>
      </>
  );
}
export default Modal;