import React, { useState, useEffect } from "react";
import styles from "./WishListPage.module.scss";
import { subscribeToFlowers } from "../../services/flower-service";
import FlowerCard from "../../components/FlowerCard/FlowerCard";

const WishListPage = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    // set up the subscription
    const unsubscribe = subscribeToFlowers(setFlowers);

    // cleanup
    return () => {
      // unsubscribe
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    document.title = "Flower Haven: Wish List";

    // cleanup
    return () => {
      document.title = "Flower Haven";
    };
  }, []);

  // Filter flowers with wishList === true
  const filteredFlowers = flowers.filter((flower) => flower.wishList);

  return (
    <>
      <main>
        <header>
          <h1 className={styles.heading}>Wish List</h1>
        </header>

        <div className={styles.imgBox}>
          <img
            className={styles.banner}
            src="src\assets\flowerbanner.jpg"
            alt="field"
          />
        </div>

        <section>
          {filteredFlowers.length > 0 ? (
            filteredFlowers.map((flower) => (
              <FlowerCard key={flower.id} flower={flower} />
            ))
          ) : (
            <div className={styles.emptyMessage}>No items in wishlist</div>
          )}
        </section>

        <div className={styles.imgBox}>
          <img
            className={styles.banner}
            src="src\assets\footer.jpg"
            alt="field"
          />
        </div>
      </main>
    </>
  );
};

export default WishListPage;
