import classes from "./Modal.module.css";
import { ReactComponent as ModalCloseIcon } from "../../assets/modal-close.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Backdrop from "../UIElements/Backdrop/Backdrop";

const Modal = ({ children, show, onClose }) => {
  const navigate = useNavigate();

  const closeModal = (e) => {
    // onClose();
    // e.stopPropagation();
    navigate(-1);
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className={classes.container}>
      {show && <Backdrop onClick={closeModal} />}
      <CSSTransition
        in={show}
        timeout={300}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <div className={classes.modal}>
          <div className={classes.closeWrapper} onClick={closeModal}>
            <button className={classes.closeButton}>
              <ModalCloseIcon className={classes.closeIcon} />
            </button>
          </div>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Modal;
