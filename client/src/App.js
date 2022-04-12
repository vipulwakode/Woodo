import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './companents/Navbar';
import Poster from './companents/Poster';
import AboutUs from './companents/AboutUs';
import Furnitures from './companents/furnitures/Furnitures';
import Footer from './companents/Footer';
import Copyrights from './companents/Copyrights';
import Register from './companents/auth/Register';
import Login from './companents/auth/Login';
import Profile from './companents/profile/Profile';
import Cart from './companents/cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './companents/utils/ScrollToTop';

function App() {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState({
    value: '',
  });

  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState([]);
  const [orders, setOrders] = useState([]);
  const [islogged, setIslogged] = useState(false);

  //Order finally

  const placeOrder = async () => {
    const resOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token.value,
      },
    };

    const res = await fetch('http://localhost:5000/order', resOptions);
    const data = await res.json();

    if (data === 'Please select a address') {
      alert(
        'Please select a address. Now you will be redirected to Profile section!'
      );
      window.location.href = 'http://localhost:3000/profile';
      return;
    }
    alert('We Have recieved your order successfully ✔️✔️✔️');
    setCart(data.cart);
    console.log(data);
  };

  //delete item from cart
  const deleteFromCart = async (id) => {
    const resOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token.value,
      },
    };

    const res = await fetch(`http://localhost:5000/cart/${id}`, resOptions);
    const data = await res.json();
    setCart(data.cart);
  };

  //add item to cart
  const addToCart = async (data) => {
    const resOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token.value,
      },
      body: JSON.stringify({
        code: data,
      }),
    };

    const res = await fetch('http://localhost:5000/cart', resOptions);
    const data1 = await res.json();
    setCart(data1.cart);
    alert('Item Added to your Cart');
  };

  //get User data from token

  const getTokenData = async () => {
    const value = localStorage.getItem('token');
    if (value) {
      setToken({ ...token, value: value });
      const resOptions = {
        method: 'GET',
        headers: {
          'auth-token': value,
        },
      };

      const res = await fetch('http://localhost:5000/user', resOptions);
      const data = await res.json();
      if (data) {
        setUser(data);
        setCart(data.cart ? data.cart : []);
        setAddress(data.address ? data.address : []);
        setOrders(data.orders ? data.orders : []);
        setIslogged(true);
      }
    }
  };

  //address delete handle
  const addressDelete = async (id) => {
    const resOptions = {
      method: 'DELETE',
      headers: {
        'auth-token': token.value,
      },
    };
    const res = await fetch(`http://localhost:5000/address/${id}`, resOptions);
    const data = await res.json();
    setAddress(data.address);
  };

  //add address handler
  const addAddress = async (formdata) => {
    const resOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token.value,
      },
      body: JSON.stringify({
        flat: parseInt(formdata.flat),
        line1: formdata.line1,
        line2: formdata.line2,
        isDefault: 0,
      }),
    };
    const res = await fetch('http://localhost:5000/address', resOptions);
    const data = await res.json();
    if (
      data === '"flat" must be a number' ||
      data === '"line1" is not allowed to be empty' ||
      data === '"line2" is not allowed to be empty'
    ) {
      alert(data);
      return;
    }
    setAddress(data.address);
    return true;
  };

  //changle address default

  const addressDefaultChange = async (id) => {
    const resOptions = {
      method: 'PUT',
      headers: {
        'auth-token': token.value,
      },
    };
    const res = await fetch(`http://localhost:5000/address/${id}`, resOptions);
    const data = await res.json();
    setAddress(data.address);
  };

  //logout feature

  const logOutHandler = () => {
    localStorage.removeItem('token');
    setUser({});
    setCart([]);
    setAddress([]);
    setOrders([]);
    setIslogged(false);
    window.location.href = 'http://localhost:3000/';
  };

  //get products list
  useEffect(async () => {
    const res = await fetch('http://localhost:5000/products/');
    const data = await res.json();
    setProducts(data);
    getTokenData();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Navbar user={user} logout={logOutHandler} islogged={islogged} />
        <Switch>
          <Route path='/' exact>
            <Poster />
            <Furnitures
              products={products}
              islogged={islogged}
              addToCart={addToCart}
            />
            <AboutUs />
          </Route>
          {islogged ? (
            <Route path='/profile' exact>
              <Profile
                user={user}
                orders={orders}
                address={address}
                addressDefaultChange={addressDefaultChange}
                addAddress={addAddress}
                addressDelete={addressDelete}
              />
            </Route>
          ) : (
            ''
          )}

          <Route path='/aboutus' exact>
            <AboutUs />
          </Route>

          <Route path='/furnitures' exact>
            <Furnitures
              products={products}
              islogged={islogged}
              addToCart={addToCart}
            />
          </Route>

          <Route path='/cart' exact>
            <Cart
              cart={cart}
              products={products}
              deleteFromCart={deleteFromCart}
              placeOrder={placeOrder}
            />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
        <Footer />
        <Copyrights />
      </div>
    </Router>
  );
}

export default App;
