import React, { useState } from "react";
import styles from "./FlowerCard.module.scss";
import Modal from "../Modal/Modal";
import Cart from "../Cart/Cart";
import { updateWishList } from "../../services/flower-service";

const FlowerCard = ({ flower }) => {
  const [showModal, setShowModal] = useState(false); 

  const handleWishListChange = async () => {
    try {
      await updateWishList(flower.id, { wishList: !flower.wishList });
    } catch (error) {
      console.error("Error updating wish list:", error);
    }
  };

  const handleModalToggle = () => {
    setShowModal(!showModal); 
  };

  return (
    <>
      <article className={styles.flowerBox}>
        <div className={styles.cardHeading}></div>

        <img src={flower.imageLink} alt={flower.name} />
        <div className={styles.flowerHeader}>
          <h2>{flower.name}</h2>
          <button
            className={`${styles.wish} ${flower.wishList ? styles.active : ""}`}
            onClick={handleWishListChange}
          >
            <img src="assets/heart.png" alt="heart" />
          </button>
        </div>

        <p>Starting from: ${flower.size.small.price} AUD</p>
        <div>
          <div className={styles.buttonBox}>
            <Modal
              buttonText="Select options"
              children={
                <Cart
                  flower={flower}
                  showModal={showModal}
                  handleModalToggle={handleModalToggle}
                />
              }
              size="medium"
              isOpen={showModal} 
              toggleModal={handleModalToggle} 
            />
          </div>
        </div>
      </article>
    </>
  );
};

export default FlowerCard;
