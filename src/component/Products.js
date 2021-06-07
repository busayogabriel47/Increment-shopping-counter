import React, { Component } from 'react';
import util from '../component/util.js';

class Products extends Component {
    
    render() { 
        const productItems = this.props.products.map(product => (
            <div className="col-12 col-md-4" key={product.id}>
                <div className="text-center thumbnail">
                    <a href={`#${product.id}`} onClick={(e)=> this.props.handleAddToCart(e, product)}>
                        <img src={`/products/${product.sku}_2.jpg`} alt={product.title} width="80%"/>
                        <p>{product.title}</p>
                    </a>
                    <div>
                        <b>{util.formatCurrency(product.price)}</b>
                        <button className="btn btn-danger mx-3" onClick={(e)=> this.props.handleAddToCart(e, product)}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        ))

        return ( 
            <>
                <div className="row">
                    {productItems}
                </div>
            </>
         );
    }
}
 
export default Products;