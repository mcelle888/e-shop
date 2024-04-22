import React, { useState } from "react";
import styles from "./AddCart.module.scss";
import CartContent from "../CartContent/CartContent";
import Modal from "../../containers/Modal/Modal";

const AddCart = ({ handleKeepShopping }) => {
  const [showImage, setShowImage] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  
  return (
    <div className={styles.addedCartBox}>
      <h3>Successfully Added to Cart!</h3>
      <div>
        <Modal
          buttonText={"View Cart"}
          size="large"
          isOpen={modalOpen}
          toggleModal={handleModalToggle}
        >
          <CartContent />
        </Modal>
        <button className={styles.cartButtons} onClick={handleKeepShopping}>
          Keep Shopping
        </button>
      </div>
      {showImage && (
        <div className={styles.errorMessage}>
          <img
            className={styles.wip}
            src="assets/wip.png"
            alt="Added to Cart"
          />
          <p>Sorry, still working on the Cart feature!</p>
        </div>
      )}
    </div>
  );
};

export default AddCart;
