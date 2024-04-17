import React, { useState } from 'react'
import styles from './Modal.module.scss'

const Modal = ({ buttonText }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button onClick={toggleModal}>{buttonText}</button>
      {isOpen && (
        <dialog id="modal" className={styles.dialog} open>
          <button onClick={toggleModal} className={styles.closeDialog}>
            Close
          </button>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, temporibus.</p>
        </dialog>
      )}
    </>
  )
}

export default Modal
