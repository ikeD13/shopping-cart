import React, {Component} from 'react';
import CartItem from './cartItem.js';
const CartItems = (props) => {
    console.log(props.cartItemsList)
  return (
      <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
          <div className="list-group-item">
          <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
          </div>
          </div>
              {props.cartItemsList.map(item => <CartItem item={item}/>)}
        {console.log("cartItemsstopbeingmean",props)}
      </div>
      </div>
  );
}

export default CartItems;