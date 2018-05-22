import React, { Component } from 'react';
import './App.css';

// Images
import logo from './images/logo.png';

// Components
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Product from './components/Product';

class App extends Component {

  constructor() {
    super();

    this.state = {
      total_price: 0.00,
      products: [
        {
          product_key: "first",
          name: "Tennis Ketcher",
          description: "Very good condition and everything...",
          picture: "tennis.jpg",
          price: 24.99
        },
        {
          product_key: "second",
          name: "Football",
          description: "Very good condition and everything...",
          picture: "football.jpg",
          price: 28.99
        },
        {
          product_key: "third",
          name: "Basketball",
          description: "Very good condition and everything...",
          picture: "basketball.jpg",
          price: 30.99
        }
      ],
      cart: []
    }
  }

  onAddToCart = (prod_key) => {
      const {products} = this.state;
      
      products.map(product => {
        if (prod_key === product.product_key) {
          const cart = this.state.cart;
          const total_price = this.state.total_price;
          cart.push(product);
          this.setState({cart: cart});
          this.setState({total_price: total_price + product.price})
        }
      })
  }

  openCart = () => {
    document.getElementById('cart').style.width = "450px";
  }
  closeCart = () => {
    document.getElementById('cart').style.width = "0";
  }

  loadCart = (empty) => {
    // the cart is empty
    const {cart} = this.state;
    if (empty === true) {
      return (
        <div>Your cart is empty.</div>
      );
    } else {
      return (
        <div id="cart-items">
          {
            cart.map(product => {
              return (
                <div className="cart-product" key={product.product_key}>
                  <h1 className="cart-product-headline">{product.name}</h1>
                  <p className="cart-product-price">${product.price}</p>
                </div>
              );
            })
          }
        </div>
      );
    }
  }

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <div id="cart" className="cart">
          <button onClick={this.closeCart}>&times;</button>
          <h1>YOUR CART</h1>

          {this.state.cart.length === 0 ? this.loadCart(true) : this.loadCart(false)}
          
        </div>
        <Header openCart={this.openCart} logo={logo} />
        <Welcome/>
        <div className="body">
          {
            products.map((product, index) => {
              return (<Product key={index} addToCart={this.onAddToCart} product_key={product.product_key} name={product.name} picture={product.picture} description={product.description} price={product.price} />);
            })
          }
          
        </div>
      </div>
    );
  }
}

export default App;
