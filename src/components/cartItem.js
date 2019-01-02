import React, { Component } from 'react';

const CartItem = (props) => {
  return (
      <div class="list-group-item">
      <div class="row">
          <div class="col-md-8">{props.item.product.name}</div>
          <div class="col-md-2">{props.item.product.price}</div>
          <div class="col-md-2">{props.item.quantity}</div>
      </div>
      </div>
  );
}

export default CartItem;
