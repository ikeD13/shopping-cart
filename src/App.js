import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from  './components/Footer.js';
import CartItems from './components/CartItems.js';
import AddItem from './components/CartItems.js'
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
      ]

     
    }
  }
  addItem= (event) =>{
    event.preventDefault();
    let newItem = {
      product: {
        id: this.state.cartList.length + 1,
        name: this.state.Name,
        priceInCents:399
      },
      }
    }
  
  
  
//   this.state({
//     cartList: [...this.state]
//   })
//  let selectItem= (event)=>{
//    event.preventDefault();
//   }

  render()
  {
    const cartItemsList = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
    return (
      <div className="App">
      <Header/>
      <CartItems cartItemsList={cartItemsList}/>
      <AddItem products={this.state.products} addItem={this.addItem} />
      <Footer
      copyright={2016}/>
      </div>
  
    );
    
  }

}


export default App;
