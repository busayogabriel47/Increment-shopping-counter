import React, { Component } from 'react';

class Counter extends Component {
    

    render() { 
        return ( 
        <div className="mt-3">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-lg">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-md m-2">Delete</button>
         </div>
         );
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;

           return <ul>{this.state.tags.map( tag => <li key={tag}>{tag}</li>)}</ul> 
        
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes; 
    }

    formatCount(){
        const {value} = this.props.counter;
       return value === 0 ? <h6>Zero</h6> : value;
    }
}
  
export default Counter;