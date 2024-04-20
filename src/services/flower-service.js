import {
    collection,
    doc,
    getDocs,
    onSnapshot,
    updateDoc,
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