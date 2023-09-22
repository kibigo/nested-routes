import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import FeaturedProducts from './Components/FeaturedProducts';
import NewProducts from './Components/NewProducts';
import OrderConfirmed from './OrderConfirmed';
import NoMatch from './Components/NoMatch';
import Profile from './Components/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />}>
          <Route path='featuredproducts' element={<FeaturedProducts />}/>
          <Route path='newproducts' element={<NewProducts />}/>
        </Route>
        <Route path='/orderconfirmed' element={<OrderConfirmed />}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<NoMatch />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
