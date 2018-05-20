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

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Header logo={logo} />
        <Welcome />
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
