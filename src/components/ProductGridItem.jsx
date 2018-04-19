import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import SettingItem from '../models/SettingItem.jsx';

export default class ProductGridItem extends React.Component {
    setClassName(){
        if( this.props.display===SettingItem.DISPLAY_SINGLE_COLUMN)
            return "product-grid-item card";
        else if( this.props.display===SettingItem.DISPLAY_DOUBLE_COLUMN && this.props.index%2===0)
            return "product-grid-item card first";
        else if( this.props.display===SettingItem.DISPLAY_DOUBLE_COLUMN && this.props.index%2===1)
            return "product-grid-item card second";
    }

    render() {
        return (
        <div className={this.setClassName()}> 
            <div className="name"> {this.props.product.name} </div>
            <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={this.props.product.rating}
                editing={false}
                starColor={this.props.theme.palette.primary1Color}
                emptyStarColor={'gray'}
            />
            <img className="image" src={this.props.product.image} alt=""/>
            <div className="card-footer">
                <div className="price"> {this.props.product.price} </div>
                <button className="cart-button"> Add To Cart </button>
            </div>
        </div>
        );
    }
}