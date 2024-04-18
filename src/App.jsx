import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import LandingPage from './components/Pages/LandingPage/LandingPage'
import ProductsPage from './components/Pages/ProductsPage/ProductsPage'
import NavBar from './components/NavBar/NavBar'
import { getAllFlowers } from './services/flower-service'
import { useEffect, useState } from 'react'
import { WishProvider } from './context/WishContext'
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage'


function App() {
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {

    getAllFlowers()
      .then((data) => setFlowers(data))
      .catch((e) => console.log(e));
  }, []);


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <WishProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </WishProvider>
      </BrowserRouter>
    </>
  );
}

export default App
