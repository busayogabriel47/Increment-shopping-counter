import React, { Component } from 'react';
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