import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default class ProductListItem extends React.Component {
    render() {
        return (
        <div className="product-list-item"> 
            <img className="image" src={this.props.product.image} alt=""/>
            <div className="info-container">
                <div className="name"> {this.props.product.name} </div>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={this.props.product.rating}
                    editing={false}
                    starColor={this.props.theme.palette.primary1Color}
                    emptyStarColor={'gray'}
                />
                <div className="card-footer">
                    <div className="price"> {this.props.product.price} </div>
                    <button className="cart-button"> Add To Cart </button>
                </div>
            </div>
        </div>
        );
    }
}