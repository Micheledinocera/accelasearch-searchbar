import React from 'react';

export default class ProductListItem extends React.Component {
    render() {
        return (
        <div className="product-list-item"> 
            <div className="name"> {this.props.product.name} </div>
            <div className="category"> {this.props.product.category} </div>
            <img className="image" src={this.props.product.image} alt=""/>
        </div>
        );
    }
}