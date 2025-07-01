import classes from './Modal.module.css';
function Modal({children , onClose}) {
  // The Modal component is a reusable component that displays a modal dialog.
  return (
      <>
      <div className={classes.backdrop} onClick={onClose}/>
          <dialog open className={classes.modal}>{children}</dialog>
      </>
  );
}
export default Modal;