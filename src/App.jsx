import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import LandingPage from './components/Pages/LandingPage/LandingPage'
import ProductsPage from './components/Pages/ProductsPage/ProductsPage'
import NavBar from './components/NavBar/NavBar'
import { getAllFlowers } from './services/flower-service'
import { useEffect, useState } from 'react'


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
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/products' element={<ProductsPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
