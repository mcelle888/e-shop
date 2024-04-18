import React from "react";
import { Link } from "react-router-dom";
import styles from "./FlowerCard.module.scss";
import Modal from "../Modal/Modal";
import Cart from "../Cart/Cart";
import { updateWishList } from "../../services/flower-service";

const FlowerCard = ({ flower }) => {
  const handleWishListChange = async () => {
    try {
      await updateWishList(flower.id, { wishList: !flower.wishList });
    } catch (error) {
      console.error("Error updating wish list:", error);
    }
  };

  return (
    <>
      <article className={styles.flowerBox}>
        <div className={styles.flowerCard}>
          <div className={styles.cardHeading}>
            <h2>{flower.name}</h2>
            <button
              className={`${styles.wish} ${
                flower.wishList ? styles.active : ""
              }`}
              onClick={handleWishListChange}
            >
              <img src="src\assets\heart.png" alt="heart" />
            </button>
          </div>

          <img src={flower.imageLink} alt={flower.name} />
          <p>Starting from: ${flower.size.small.price} AUD</p>
          <p>Description: {flower.description}</p>
          <div>
            <Link to={flower.id}>More Info</Link>
            <div className={styles.buttonBox}>
              <Modal
                buttonText="Add to Cart"
                children={<Cart flower={flower} />}
                size="medium"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default FlowerCard;
