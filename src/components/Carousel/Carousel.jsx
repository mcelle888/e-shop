import React, { useState, useEffect } from "react";
import {
  getFeaturedFlowers,
  subscribeToFlowers,
  updateWishList,
} from "../../services/flower-service";
import styles from "./Carousel.module.scss";

const Carousel = () => {
  const [flowers, setFlowers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWishList, setIsWishList] = useState(false);

  const wishToggle = (flowerId) => {
    setIsWishList((pastWishState) => {
      const updatedFlowers = flowers.map((flower) => {
        if (flower.id === flowerId) {
          return { ...flower, isWishList: !pastWishState };
        }
        return flower;
      });
      setFlowers(updatedFlowers);

      updateWishList(flowerId, { wishList: !pastWishState });

      return !pastWishState;
    });
  };

  useEffect(() => {
    const fetchFlowers = async () => {
      const flowerData = await getFeaturedFlowers();
      console.log("Fetched flowers:", flowerData.length);
      setFlowers(flowerData);
    };
    fetchFlowers();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 1 < flowers.length) {
        return prevIndex + 1;
      } else {
        return 0;
      }
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex - 1 >= 0) {
        return prevIndex - 1;
      } else {
        return flowers.length - 1;
      }
    });
  };

  const visibleFlowers = [];

  if (flowers.length > 0) {
    for (let i = currentIndex; i < currentIndex + 5; i++) {
      const index = i % flowers.length;
      visibleFlowers.push(flowers[index]);
    }
  }

  return (
    <>
      <section className={styles.featuredContainer}>
        <div className={styles.buttonOverlay}>
          <button className={styles.navigateButton} onClick={prevSlide}>
            <img src="src\assets\prev.png" alt="prev" />
          </button>
          <button className={styles.navigateButton} onClick={nextSlide}>
            <img src="src\assets\next.png" alt="next" />
          </button>
        </div>

        <div className={styles.carouselBanner}>
          <div className={styles.carouselCards}>
            {visibleFlowers.map((flower, index) => (
              <div key={index} className={styles.featuredCard}>
                <div className={styles.featuredHeading}>
                  <h3>{flower.name}</h3>
                  <button
                    className={`${styles.wish} ${
                      flower.isWishList ? styles.active : ""
                    }`}
                    onClick={() => wishToggle(flower.id)}
                  >
                    <img src="src\assets\heart.png" alt="heart" />
                  </button>
                </div>
                <img
                  className={styles.flowerImg}
                  src={flower.imageLink}
                  alt={flower.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
