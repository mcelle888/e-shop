import React, { useEffect, useState } from "react";
import styles from "./ProductsPage.module.scss";
import FlowerCard from "../../components/FlowerCard/FlowerCard";
import { subscribeToFlowers } from "../../services/flower-service";

const ProductsPage = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    // set up the subscription
    const unsubscribe = subscribeToFlowers(setFlowers);
    // get the subscription to set state

    // clean up function
    return () => {
      // unsubscribe
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    document.title = "Flower Haven: All Products";

    // cleanup
    return () => {
      document.title = "Flower Haven";
    };
  }, []);

  return (
    <>
      <main>
        <header>
          <h1 className={styles.heading}>All Products</h1>
        </header>

        <div className={styles.imgBox}>
          <img
            className={styles.banner}
            src="src\assets\flowerbanner.jpg"
            alt="field"
          />
        </div>

        <section>
          {flowers.map((flowers) => (
            <FlowerCard key={flowers.id} flower={flowers} />
          ))}
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

export default ProductsPage;
