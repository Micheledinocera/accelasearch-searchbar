import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import SettingItem from '../models/SettingItem.jsx';
import Slider from "react-slick";
import $ from 'jquery';

export default class ProductGridItem extends React.Component {
    constructor(){
        super();
        this.clickHandler = this.clickHandler.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.state={
            clicked:false,
            selected:false
        }
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

    clickHandler(event){
        var notSelectedItem;
        var parentPairContainer;
        // var parentProductItem;
        var parentSingleContainer;
        if( this.props.display===SettingItem.DISPLAY_DOUBLE_COLUMN){
            // parentProductItem=$( event.target ).closest(".product-grid-item");
            parentSingleContainer=$( event.target ).closest(".single-product-container");
            parentSingleContainer.removeClass("not-selected");
            // parentSingleContainer.toggleClass("selected");
            if( parentSingleContainer.hasClass("selected")){
                parentSingleContainer.removeClass("selected");
                parentSingleContainer.off("scroll");
            } else {
                parentSingleContainer.addClass("selected");
                parentSingleContainer.on('scroll',(e) => {
                    console.log('SCROLLING!');
                    clearTimeout(parentSingleContainer.data(this, 'scrollTimer'));
                    parentSingleContainer.data(this, 'scrollTimer', setTimeout(function(){console.log("Haven't scrolled in 250ms!")}, 250));
                    // singleProductContainer.data(this, 'scrollTimer', setTimeout(that.scrollFinished(e), 250));
                });
            }
            parentPairContainer=$( event.target ).closest(".pair-product-container");
            if(this.props.index%2===0)
                notSelectedItem=parentPairContainer.find(".second");
            else
                notSelectedItem=parentPairContainer.find(".first");
            
            notSelectedItem.removeClass("selected");
            
            if(notSelectedItem.hasClass("not-selected")){
                notSelectedItem.css("display","block");
                setTimeout(()=>notSelectedItem.removeClass("not-selected"),300);
            } else {
                notSelectedItem.addClass("not-selected");
                setTimeout(()=>notSelectedItem.css("display","none"),300);   
            }
        }
        this.setState({selected:!this.state.selected});
    }

    setClassName(){
        if( this.props.display===SettingItem.DISPLAY_SINGLE_COLUMN)
            // return "product-grid-item card";
            return this.state.selected?"selected":"";
        else if( this.props.display===SettingItem.DISPLAY_DOUBLE_COLUMN && this.props.index%2===0)
            // return "product-grid-item card first";
            return "first";
        else if( this.props.display===SettingItem.DISPLAY_DOUBLE_COLUMN && this.props.index%2===1)
            // return "product-grid-item card second";
            return "second";
    }

    renderVariant(){
        return this.props.product.subProducts.map((item,index,array) => 
            <div className={"sub-products product-grid-item card"} key={"sub-products-"+item.name+"-"+index} onClick={this.clickHandler} ref={(node) => {
                if (node) {
                  node.style.setProperty("margin-top", (this.props.display===SettingItem.DISPLAY_DOUBLE_COLUMN?35:-10)-5*index+"px", "important");
                  node.style.setProperty("margin-left", (this.props.display===SettingItem.DISPLAY_DOUBLE_COLUMN?10:-10)-5*index+"px", "important");
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
            <div className={"single-product-container "+this.setClassName()} style={{width: this.props.display===SettingItem.DISPLAY_SINGLE_COLUMN?"100%":"50%"}}>
                { this.renderVariant() }
                <div className="product-grid-item card" onClick={this.clickHandler} style={{zIndex:this.props.product.subProducts.length}}> 
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
                    <div className="short_desc">
                        <div className="title"> Short description </div>
                        <div className="value"> {this.props.product.short_desc} </div>
                    </div>
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
            </div>:
            <Slider {...settings}>
                { this.renderCards()  }
            </Slider>
        );
    }
}