import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import NavBar from './components/NavBar/NavBar'
import { getAllFlowers } from './services/flower-service'
import { useEffect, useState } from 'react'
import WishListPage from './pages/WishListPage/WishListPage'
import LandingPage from './pages/LandingPage/LandingPage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
 
 


function App() {
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {

    getAllFlowers()
      .then((data) => setFlowers(data))
      .catch((e) => console.log(e));
  }, []);

   const [isModalOpen, setIsModalOpen] = useState(false);

   const toggleModal = () => {
     setIsModalOpen(!isModalOpen);
   };


  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
