import React, { Component, useState, useEffect } from 'react';
import Products from './component/Products';
import Filter from './component/filter';
import Basket from './component/Basket';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: [],
      filterProducts: [],
      cartItems: []
     }

     this.handleChangeSort = this.handleChangeSort.bind(this);
     this.handleChangeSize = this.handleChangeSize.bind(this);
     this.handleAddToCart = this.handleAddToCart.bind(this);
     this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

handleChangeSort(e){
  this.setState({sort: e.target.value});
  this.listProducts();
}

handleChangeSize(e){
  this.setState({size: e.target.value});
  this.listProducts();
}

listProducts(){
  this.setState(state =>{
    if(state.sort !== ''){
      state.products.sort((a, b) => (state.sort === "lowest")? (a.price > b.price?1:-1) : (a.price < b.price?1:-1))
    }else{
      state.products.sort((a, b) => (a.id < b.id?1:-1));
    }
    
    if(state.size!== ''){
      return {filteredProducts: state.products.filter(a =>
        a.availableSizes.indexOf(state.size) >= 0
      )}
    }

    return {filteredProducts: state.products};
  })
}

handleAddToCart(e, product){
  this.setState(state => {
    const cartItems = state.cartItems;
    let productAlreadyInCart = false;
    cartItems.forEach(item => {
      if(item.id === product.id){
        productAlreadyInCart = true;
        item.count++;
      }
    });
    if(!productAlreadyInCart){
      cartItems.push({...product, count:1});
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    return cartItems;
  })
}

handleRemoveFromCart(e, item){
  this.setState(state => {
    const cartItems = state.cartItems.filter(els => els.id != item.id)
  localStorage.setItem('cartItems', cartItems)
  return {cartItems}
  })
}

//Fetch data inside React life cicle method
componentDidMount(){
  fetch("http://localhost:8000/products")
  .then(res => res.json())
  .then(data => this.setState(
      {
      products: data, 
      filterProducts: data
    }));
    if(localStorage.getItem('cartItems')){
      this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))})
    }
}

  render() { 
    return ( 
      <>
      <div className="container">
         <h1 className="text-center mt-5">Ecommerce shopping Cart Application</h1>
         <hr/>
         <div className="row">
             <div className="col-12 col-md-8">
               <Filter size={this.state.size} sort={this.state.sort} handleChangeSize={this.handleChangeSize} handleChangeSort={this.handleChangeSort} count={this.state.filterProducts.length}/>
                <hr/>
               <Products products={this.state.filterProducts} handleAddToCart={this.handleAddToCart}/>
             </div>
             <div className="col-12 col-md-4">
                <Basket cartItems={this.state.cartItems} 
                  handleRemoveFromCart={this.handleRemoveFromCart}/>
             </div>
         </div>
       </div> 
   </>
     );
  }
}
 
export default App;



/*import React, { Component } from 'react';
import News from './component/News/news';
import Sidenews from './component/News/Sidenews'

class App extends Component{
  constructor(){
    super();
    this.state= {
      new1:{
        type: 'top-headlines',
        query : 'sources=bbc-news'
      },
      new2:{
        type: 'everything',
        query : 'domains=techcrush.com&language=en'
      },
      new3:{
        type: 'everything',
        query : 'domains=comicbookmovie.com&language=en'
      }
    }
  }

  render(){
    return(
        <>
         <div className="container-fluid">
           <div className="navbar-fixed">
             <nav>
               <div className="nav-wrapper indigo lighten-4">
                 <a href="#" className="brand-logo center">My Feed</a>
               </div>
             </nav>
           </div>
           <div class="row">
             <div class="col-12 col-md-8">
                <News news={this.state.new1}/>
                <News news={this.state.new2}/>
             </div>
             <div className="col-12 col-md-4">
                <Sidenews news={this.state.new3}/>
             </div>
           </div>
         </div>
        </>
    )
    }
}

export default App;








/*import React, { Component } from 'react';
import Counter from "./component/counter";
import Navbar from "./component/navBar";

class App extends Component {
  state = { 
    counters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
    ]
   }

   constructor(){
     super();
     console.log('App - Constructor');
   }

   componentDidMount(){
     console.log('App - Mounted');
   }

   handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
       counters [index] = { ...counter }; 
       counters[index].value++;
       this.setState({ counters });
   }

   handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
   };

   handleReset = () =>{
     const counters = this.state.counters.map(c => {
       c.value = 0;
       return c;
     });
     this.setState({counters});
   }

  render() { 
    console.log("App-rendered")
    return (
      <> 
      <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <button onClick={this.handleReset} className="btn btn-primary btn-md m-2">
        Reset
      </button>
        {this.state.counters.map(counter =>
            <Counter 
            key={counter.id}  
            onDelete={this.handleDelete}
            onIncrement = {this.handleIncrement}
            counter={counter}
            />
        )}
      </>
     );
  }
}
 
export default App;
*/