import {
    collection,
    doc,
    getDocs,
    onSnapshot,
    updateDoc,
    addDoc,
    deleteDoc,
  } from "firebase/firestore";
  import { db } from "../config/firestore";


  // get all flower data
  export const getAllFlowers = async () => {
    const collectionRef = collection(db, "flowers");
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  };


  // real time updates
  export const subscribeToFlowers = (callback) => {
    const collectionRef = collection(db, "flowers")
    const unsub = onSnapshot(collectionRef, (snapshot) => {
      const flowerData = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
      callback(flowerData)
    })
    return unsub
  }


  // get featured flowers for carousel
 export const getFeaturedFlowers = async () => {
   const collectionRef = collection(db, "flowers");
   const snapshot = await getDocs(collectionRef);
   return snapshot.docs
     .filter((doc) => doc.data().isFeatured === true)
     .map((doc) => {
       return { id: doc.id, ...doc.data() };
       
     });

     
 };


// update wishlist
 export const updateWishList = async (id, values) => {
   const docRef = doc(db, "flowers", id);
   await updateDoc(docRef, {
     wishList: values.wishList,
   });
 };


// add to cart collection
export const addToCart = async (flowerName, size, quantity, price, totalPrice, imageLink) => {
  try {
    const cartRef = collection(db, "cart");  
    await addDoc(cartRef, {
      flowerName,
      size,
      quantity,
      price,
      totalPrice,
      imageLink,
    });
    console.log("Item added to cart successfully!");
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};


// get cart data
export const fetchCartItems = async () => {
  const cartRef = collection(db, "cart");
  const snapshot = await getDocs(cartRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};


// delete cart items
export const removeFromCart = async (itemId) => {
  try {
    const docRef = doc(db, "cart", itemId);
    await deleteDoc(docRef);
    console.log("Item deleted successfully!");
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};
 