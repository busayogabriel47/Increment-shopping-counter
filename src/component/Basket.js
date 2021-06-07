import React, { Component } from 'react'
import util from '../component/util';

export default class Basket extends Component {
    render() {
        const {cartItems} = this.props
        return (
            <div className="alert alert-primary">
                {cartItems.length === 0 ? <h4>Basket is empty</h4> : <div>You have {cartItems.length} products in the backet.</div>}

                {cartItems.length > 0 && 
                    <div className="">
                        <ul>
                            {cartItems.map(item => (
                                <li>
                                    <h4>{item.title}</h4>
                                    x {item.count} = {item.price * item.count}
                                    <button className="btn btn-danger" 
                                    onClick={(e) => this.props.handleRemoveFromCart(e, item)}
                                    >x</button>
                                </li>
                            ))}
                        </ul>
                       Total: {util.formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}
                       <br/>
                       <button className="btn btn-info" onClick={()=> alert("Checkout needs to be implement...")}>Checkout</button>
                    </div>
                }
                
            </div>
        )
    }
}
