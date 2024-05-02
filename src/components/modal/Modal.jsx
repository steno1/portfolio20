import "./modal.css";

import Card from '../card/Card';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useModalContext } from "../../context/modalContext";

const Modal = ({ className, children }) => {
  const { showModal, closeModalHandler } = useModalContext();

  return (
    <>
      {showModal &&
        ReactDOM.createPortal(
          <Fragment>
            <section id='backdrop' onClick={closeModalHandler}></section>
            <Card className={className}>
              {children} {/* Render children only once */}
            </Card>
          </Fragment>,
          document.querySelector("#overlays")
        )
      }
    </>
  );
};

export default Modal;
