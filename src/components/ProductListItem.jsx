import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Slider from "react-slick";
import $ from 'jquery';

export default class ProductListItem extends React.Component {
    constructor(){
        super();
        this.state={selected:false}
        this.clickHandler=this.clickHandler.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick(event){
        event.stopPropagation()
        var button=$( event.target );
        button.html('DONE');
        button.css('background-color','#5ff442')
        setTimeout(
            ()=>
            {   
                button.html('Add To Cart');
                button.css('background-color','white');
            }
            ,1000)
    }

    clickHandler(){
        this.setState({selected:!this.state.selected});
    }

    renderVariant(){
        return this.props.product.subProducts.map((item,index,array) => 
            <div className={this.state.selected?"selected sub-products product-list-item card":"sub-products product-list-item card"} key={"sub-products-"+item.name+"-"+index} onClick={this.clickHandler} ref={(node) => {
                if (node) {
                  node.style.setProperty("margin-top", -10-5*index+"px", "important");
                  node.style.setProperty("margin-left", 40-5*index+"px", "important");
                  node.style.setProperty("z-index", array.length-index);
                }
              }}> 
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
                <div style={{width:"50%"}}>
                        <div className="secondary-price strikediag"> {this.props.product.price} </div>
                        <div className="price"> {this.props.product.price} </div>
                    </div>
                    <button className="cart-button"> Add To Cart </button>
                </div> 
            </div>
        )
    } 

    renderCards(){
        return this.props.product.subProducts.map((item,index,array) => 
            <div className={"product-grid-item card"} key={"sub-products-"+item.name+"-"+index} onClick={this.clickHandler}> 
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
                <div className="description">
                    <div className="title"> Description </div>
                    <div className="value"> {this.props.product.desc} </div>
                </div>
                <div className="card-footer">
                    <div style={{width:"50%"}}>
                        <div className="secondary-price strikediag"> {this.props.product.price} </div>
                        <div className="price"> {this.props.product.price} </div>
                    </div>
                    <button className="cart-button" onClick={this.buttonClick}> Add To Cart </button>
                </div> 
            </div>
        )
    }
                     
    render() {
        var settings = {
            dots: true,
            infinite: false
          };
        return (
        !this.state.selected || this.props.product.subProducts.length===0?
        <div> { this.renderVariant() }
        <div className={this.state.selected?"selected product-list-item card":"product-list-item card"} onClick={this.clickHandler} style={{zIndex:this.props.product.subProducts.length}}> 
            
            <div className="not-selected-container">
                <img className="image" src={this.props.product.image} alt=""/>
                <div className="info-container">
                    <div className="name"> {this.props.product.name} </div>
                    <div className="price-container" >
                        <div className="secondary-price strikediag"> {this.props.product.price} </div>
                        <div className="price"> {this.props.product.price} </div>
                    </div>
                    <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={this.props.product.rating}
                        editing={false}
                        starColor={this.props.theme.palette.primary1Color}
                        emptyStarColor={'gray'}
                    />
                    <div className="card-footer">
                        <div style={{width:"50%",display:this.state.selected?'block':'none'}}>
                            <div className="secondary-price strikediag"> {this.props.product.price} </div>
                            <div className="price"> {this.props.product.price} </div>
                        </div>
                        <button className="cart-button" onClick={this.buttonClick}> Add To Cart </button>
                    </div>
                </div>
            </div>
            <img className="image" src={this.props.product.image} alt=""/>
            <div className="short_desc">
                <div className="title"> Short Desctiption </div>
                <div className="value"> {this.props.product.short_desc} </div>
            </div>
            <div className="description">
                <div className="title"> Desctiption </div>
                <div className="value"> {this.props.product.desc} </div>
            </div>
        </div>
        </div>:
        <div className="product-list-container">
            <Slider {...settings}>
                { this.renderCards()  }
            </Slider>
        </div>
        );
    }
}