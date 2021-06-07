import React, { Component } from 'react'

export default class filter extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        {this.props.count} products found
                    </div>
                    <div className="col-4">
                        <label>
                            Order by price
                            <select className="form-control" value={this.props.sort} onChange={this.props.handleChangeSort}>
                                <option>Select</option>
                                <option value="lowest">Lowest to highest</option>
                                <option value="highest">Highest to lowest</option>
                            </select>
                        </label>
                    </div>
                    <div className="col-4">
                        <label>
                            filter by size
                            <select className="form-control" 
                            value={this.props.size} 
                            onChange={this.props.handleChangeSize}>
                                <option>All</option>
                                <option value="x">XS</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                                <option value="xxl">XXL</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
