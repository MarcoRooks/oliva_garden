import '../src/app.css';
import Home from './components/home/home.js';
import Navbar from './components/navbar/navbar.js';
import Menu from './components/menu/menu.js';
import Orders from './components/order/orders.js';
import Contact from './components/contact/contact.js';
import Cart from './components/cart/cart.js';
import Checkout from './components/checkout/checkout';
import {BrowserRouter as Router,
  Route,
  Redirect,
  Routes
} from 'react-router-dom'

function App() {
  return (<>
  <Router>
  <Navbar/>
    <main className='main'>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      
    </main>
  <Cart/>
  </Router>
  </>
  );
}

export default App;
