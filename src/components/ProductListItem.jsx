import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import SettingItem from '../models/SettingItem'
import Slider from "react-slick";
import $ from 'jquery';

export default class ProductListItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selected:false,
            subProduct:this.props.product.subProducts.length>0?this.props.product.subProducts[0]:null
        }
        this.clickHandler=this.clickHandler.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.retrieveConfigurations = this.retrieveConfigurations.bind(this);
        this.checkSubProductConfiguration = this.checkSubProductConfiguration.bind(this);
        this.checkConfigutrationClassName = this.checkConfigutrationClassName.bind(this);
        this.configurationClick = this.configurationClick.bind(this);
        this.configurations=[];
    }

    buttonClick(event){
        event.stopPropagation();
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

    retrieveConfigurations(){
        this.props.product.subProducts.forEach((item) => {
            item.configuration.forEach( (configuration_item) => {
                if( this.configurations.filter((configurations_item)=> configurations_item.title===configuration_item.title).length===0)
                    this.configurations.push({
                        title:configuration_item.title,
                        type:configuration_item.type,
                        values:[configuration_item.value],
                        labels:[configuration_item.label]
                    }); 
                else
                    this.configurations.forEach((configurations_item) => {
                        if(configurations_item.title===configuration_item.title && configurations_item.values.indexOf(configuration_item.value)=== -1){
                            configurations_item.values.push(configuration_item.value)
                            configurations_item.labels.push(configuration_item.label)
                        }
                    });
        })});
        return this.configurations;
    }

    renderConfigurable(){
        return <div className={this.state.selected?"selected product-list-item card":"product-list-item card"} onClick={this.clickHandler}> 
        <div className="not-selected-container">
            <img className="image" src={this.state.subProduct.image} alt=""/>
            <div className="info-container">
                <div className="name"> {this.state.subProduct.name} </div>
                <div className="price-container" >
                    <div className="secondary-price strikediag"> {this.state.subProduct.price} </div>
                    <div className="price"> {this.state.subProduct.price} </div>
                </div>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={this.state.subProduct.rating}
                    editing={false}
                    starColor={this.props.theme.palette.primary1Color}
                    emptyStarColor={'gray'}
                />
                <div className="card-footer">
                    <div style={{width:"50%",display:this.state.selected?'block':'none'}}>
                        <div className="secondary-price strikediag"> {this.state.subProduct.price} </div>
                        <div className="price"> {this.state.subProduct.price} </div>
                    </div>
                    <button className="cart-button" onClick={this.props.product.type===SettingItem.TYPE_CONFIGURABLE && !this.state.selected?null:this.buttonClick}> {this.props.product.type===SettingItem.TYPE_CONFIGURABLE && !this.state.selected?'Show Details':'Add To Cart'} </button>
                </div>
            </div>
        </div>
        <img className="image" src={this.state.subProduct.image} alt=""/>
        <div className="short_desc">
            <div className="title"> Short Desctiption </div>
            <div className="value"> {this.state.subProduct.short_desc} </div>
        </div>
        <div className="description">
            <div className="title"> Desctiption </div>
            <div className="value"> {this.state.subProduct.desc} </div>
            {this.props.product.type===SettingItem.TYPE_CONFIGURABLE?
            <div className="configurable">
                {this.retrieveConfigurations().map(
                    (item,index,array)=>{
                        return <div className="single-configuration"> 
                            <div className="title">{item.title} </div>
                            <div className="values"> {item.values.map(
                                (configuration_item,configuration_index) => <div className={this.checkConfigutrationClassName(item,configuration_item)} onClick={(event)=>this.configurationClick(event,item,configuration_item)} style={{backgroundColor:item.type==="color"?item.labels[configuration_index]:null,width:item.type==="color"?"60px":null}}> {item.type==="color"?null:item.labels[configuration_index]} </div>
                            )} </div>
                        </div>
                })}
            </div>
            :null}
        </div>
    </div>
    }

    checkConfigutrationClassName(item,configuration_item){
        let className = "value";
        if(this.checkSubProductConfiguration(configuration_item))
            className+=" selected";

        var tempConfiguration=[];
        this.state.subProduct.configuration.forEach((subProductConfigurationItem)=>tempConfiguration.push({
            type:subProductConfigurationItem.type,
            title:subProductConfigurationItem.title,
            value:subProductConfigurationItem.value
        }));
        tempConfiguration.forEach((tempConfigurationItem)=>{
            if(item.title===tempConfigurationItem.title) 
                tempConfigurationItem.value=configuration_item
        });
        let check = this.props.product.subProducts.some((subProductConfigurationItem) =>
            this.checkConfigurationEquality(subProductConfigurationItem.configuration,tempConfiguration)  
        );
        return check?className:className+" strikediag-black";
    }

    checkSubProductConfiguration(configuration_item){
        var check=false;
        this.state.subProduct.configuration.forEach((item)=>{
            if(item.value===configuration_item)
                check=true;
        });
        return check;
    }

    configurationClick(event,value,selectedValue){
        event.stopPropagation();
        var tempConfiguration=[]
        this.state.subProduct.configuration.forEach((item)=>tempConfiguration.push({
            type:item.type,
            title:item.title,
            value:item.value
        }));
        tempConfiguration.forEach((item)=>{
            if(item.title===value.title) 
                item.value=selectedValue
        });
        this.props.product.subProducts.forEach((item) =>{
            if(this.checkConfigurationEquality(item.configuration,tempConfiguration)){
                this.setState({subProduct:item});
            }
        });
    }

    checkConfigurationEquality(configuration,tempConfiguration){
        let check = configuration.every((item)=>
            tempConfiguration.every((tempConfigurationItem)=>{
                if(item.title===tempConfigurationItem.title)
                    return item.value===tempConfigurationItem.value;
                else
                    return true;
            })
        );
        return check;
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
        <div> { !this.state.selected?this.renderVariant():null }
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
                        <button className="cart-button" onClick={this.props.product.type===SettingItem.TYPE_CONFIGURABLE && !this.state.selected?null:this.buttonClick}> {this.props.product.type===SettingItem.TYPE_CONFIGURABLE && !this.state.selected?'Show Details':'Add To Cart'} </button>
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
        </div>:this.props.product.type===SettingItem.TYPE_CONFIGURABLE?
        this.renderConfigurable():
        <div className="product-list-container">
            <Slider {...settings}>
                { this.renderCards()  }
            </Slider>
        </div>
        );
    }
}