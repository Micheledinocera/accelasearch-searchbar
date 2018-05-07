import React from 'react';
// import StarRatingComponent from 'react-star-rating-component';
import Rating from 'react-rating';

export default class RatingItem extends React.Component {
    render() {
        //var value=this.props.selectedValue===undefined?[]:this.props.selectedValue;
        return (
            <div>
                <Rating
                emptySymbol="fa fa-star-o fa-3x star-icon-color"
                fullSymbol="fa fa-star fa-3x star-icon-color"
                fractions={4}
                initialRating={this.props.selectedValue}
                onChange= {this.props.ratingSelectedhandler}
                />
                <div>{this.props.selectedValue}</div>
            </div>
        );
    }
    /* <StarRatingComponent 
        name="rate1"
        starCount={5}
        value={this.props.selectedValue}
        editing={true}
        starColor={this.props.theme.palette.primary1Color}
        emptyStarColor={'gray'}
    /> */
}