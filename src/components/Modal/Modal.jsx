import React, { useState } from 'react';
import styles from './Modal.module.scss';

const Modal = ({ buttonText, children, size }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

 
  const sizes = {
    small: `${styles.smallModal}`,
    medium: `${styles.mediumModal}`,
    large: `${styles.largeModal}`,
  };

 
  const modalClass = sizes[size]  

  return (
    <>
      <button className={styles.modalButton} onClick={toggleModal}>
        {buttonText}
      </button>
      {isOpen && (
        <dialog className={modalClass} open>
          <button onClick={toggleModal} className={styles.closeDialog}>
            Close
          </button>
          <div>{children}</div>
        </dialog>
      )}
    </>
  );
};

export default Modal;
