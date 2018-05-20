import React from 'react';
import './Product.css';

const Product = ({addToCart,product_key,name,description,price,picture}) => {
    return (
        <div className="product">
            <h1>{name}</h1>
            <img className="picture" src={require('../images/' + picture)} alt="picture"/>
            <p>{price}</p>
            <button type="button" onClick={() => addToCart(product_key)}>Add to cart</button>
        </div>
    );
}

export default Product;