import './App.css'
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './components/home';
import ProductListing from './components/product-listing';
import ProductsDetail from './components/product-detail';

function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/products' element = {<ProductListing/>}/>
          <Route path='/products/:id' element = {<ProductsDetail/>}/>
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
