import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from  './components/Footer.js';
import CartItems from './components/CartItems.js';
import AddItem from './components/addItem.js'
class App extends Component {
  constructor(){
    super()
    this.state = {
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      cartList:[],
      name:"",
      price: 0,
      quantity: 0
    //  heyo!
    }
  }
  addItem= (event) =>{
    event.preventDefault();
    let newItem = {
      product: {
        id: this.state.cartList.length + 1,
        name: this.state.name,
        price:this.state.price*this.state.quantity
      },
      quantity: this.state.quantity
      }
      let prices = this.state.cartList.map(ducats =>ducats.product.price)
      let total = prices.reduce((acc, curr)=>{
        return (acc + curr)
      }, 0)
      total+=newItem.product.price
      this.setState({
        cartList: this.state.cartList.concat([newItem]),
        total: total
      })
    }
  updateQuantity = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }
  
  updateCart = (event) => {
    let result = this.state.products.filter(x => x.name ===event.target.value)
    this.setState({
      name: event.target.value,
      price: result[0].priceInCents/100
    })
  }

  render()
  {

    
    return (
      <div className="App">
      <Header/>
      <CartItems cartItemsList={this.state.cartList}/>
      <AddItem products={this.state.products} addItem={this.addItem} update={this.updateQuantity} updateCart={this.updateCart} total={this.state.total}/>
      <Footer
      copyright={2017}/>
      </div>
  
    );
    
  }

}


export default App;
