import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import LandingPage from './components/Pages/LandingPage/LandingPage'
import ProductsPage from './components/Pages/ProductsPage/ProductsPage'
import NavBar from './components/NavBar/NavBar'


function App() {


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
