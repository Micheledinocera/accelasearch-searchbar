import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import SettingItem from '../models/SettingItem'
import Labels from '../models/Labels.jsx'
import Slider from "react-slick";
import FontIcon from 'material-ui/FontIcon';
import $ from 'jquery';

export default class ProductListItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selected:false,
            subProduct:null,
            partialConfiguration:[]
        }
        this.labels=Labels.getLabels(document.documentElement.lang);
        this.configurationLength=this.props.product.subProducts.length>0 && this.props.product.subProducts[0].configuration!=null?this.props.product.subProducts[0].configuration.length:0;
        this.clickHandler=this.clickHandler.bind(this);
        this.buttonLabel = this.buttonLabel.bind(this);
        this.retrieveConfigurations = this.retrieveConfigurations.bind(this);
        this.checkSubProductConfiguration = this.checkSubProductConfiguration.bind(this);
        this.checkConfigutrationClassName = this.checkConfigutrationClassName.bind(this);
        this.configurationClick = this.configurationClick.bind(this);
        this.configurations=[];
        this.removeIcon=<FontIcon onClick={this.clickHandler} className="material-icons close">close</FontIcon>;
    }

    buttonClick(event){
        event.stopPropagation();
        var button=$( event.target.parentElement );
        button.toggleClass('rotate');
        setTimeout(()=>button.toggleClass('rotate'),1000);
    }

    clickHandler(event){
        event.stopPropagation();
        // var roba=$( event.target).closest('.card');
        // window.scrollTo($( event.target).closest('.card')[0].offsetTop,0);
        // debugger;
        if(!this.state.selected)
        $( '#ittweb-accelasearch-bar-container' ).animate({
            scrollTop: 
            $( event.target).closest('.card').eq(0).offset().top + $( '#ittweb-accelasearch-bar-container' ).scrollTop() - $(window).height()/5
            // $( event.target).closest('.card')[0].offsetTop - 100
        }, 500);
        this.setState({selected:!this.state.selected});
    }       

    renderVariant(){
        $('#ittweb-accelasearch-bar-container').css('overflow-y','auto');
        return this.props.product.subProducts.map((item,index,array) => 
            <div className={this.state.selected?"selected sub-products product-list-item card":"sub-products product-list-item card"} key={"sub-products-"+item.name+"-"+index} onClick={this.state.selected?null:this.clickHandler} ref={(node) => {
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
        return <div className={this.state.selected?"selected product-list-item card":"product-list-item card"} onClick={this.state.selected?()=>{window.location = this.props.product.link}:this.clickHandler}> 
        {this.removeIcon}
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
                    {
                        this.state.subProduct!==null?
                        <div className="cart-button-container">
                            <button className="cart-button front" onClick={(this.props.product.type===SettingItem.TYPE_CONFIGURABLE || this.props.product.type===SettingItem.TYPE_GROUP) && !this.state.selected?null:this.buttonClick}> {(this.props.product.type===SettingItem.TYPE_CONFIGURABLE || this.props.product.type===SettingItem.TYPE_GROUP) && !this.state.selected?'Show Details':'Add To Cart'} </button>
                            <button className="cart-button back"> DONE </button>
                        </div>:
                        <button className="cart-button disabled" onClick={(event)=>event.stopPropagation()}> Complete Configuration </button>
                    }
                </div>
            </div>
        </div>
        <img className="image" src={this.props.product.image} alt=""/>
        <div className="short_desc">
            <div className="title"> {this.labels["short_desc"]} </div>
            <div className="value"> {this.props.product.short_desc} </div>
        </div>
        <div className="description">
            <div className="title"> {this.labels["desc"]} </div>
            <div className="value"> {this.props.product.desc} </div>
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
        let check = true;
        let className = "value";
        if(this.checkSubProductConfiguration(configuration_item))
            className+=" selected";
        
            var tempConfiguration=[];
        if(this.state.subProduct!==null){    
            this.state.subProduct.configuration.forEach((subProductConfigurationItem)=>tempConfiguration.push({
                type:subProductConfigurationItem.type,
                title:subProductConfigurationItem.title,
                value:subProductConfigurationItem.value
            }));
            tempConfiguration.forEach((tempConfigurationItem)=>{
                if(item.title===tempConfigurationItem.title) 
                    tempConfigurationItem.value=configuration_item
            });
            check = this.props.product.subProducts.some((subProductConfigurationItem) =>
                this.checkConfigurationEquality(subProductConfigurationItem.configuration,tempConfiguration)  
            );
        } else {
            this.state.partialConfiguration.forEach((partialConfigurationItem)=>tempConfiguration.push({
                type:partialConfigurationItem.type,
                title:partialConfigurationItem.title,
                value:partialConfigurationItem.value
            }));
            if(tempConfiguration.length!==0 && tempConfiguration.some((tempConfigurationItem)=> tempConfigurationItem.title===item.title)){
                tempConfiguration.forEach((tempConfigurationItem)=>{
                    if(tempConfigurationItem.title===item.title) 
                        tempConfigurationItem.value=configuration_item
                });
            } else {
                tempConfiguration.push({
                    type:item.type,
                    title:item.title,
                    value:configuration_item
                });
            }
            check = this.props.product.subProducts.some((subProductConfigurationItem) =>
                this.checkConfigurationEquality(subProductConfigurationItem.configuration,tempConfiguration)  
            );
        }
        return check?className:className+" strikediag-black";
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

    checkSubProductConfiguration(configuration_item){
        var check=false;
        if(this.state.subProduct!==null){
            this.state.subProduct.configuration.forEach((item)=>{
                if(item.value===configuration_item)
                    check=true;
            });
        } else {
            this.state.partialConfiguration.forEach((item)=>{
                if(item.value===configuration_item)
                    check=true;
            });
        }
        return check;
    }

    configurationClick(event,value,selectedValue){
        event.stopPropagation();
        var tempConfiguration=[]
        if(this.state.subProduct!==null)
        {
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
        } else {
            this.state.partialConfiguration.forEach((item)=>tempConfiguration.push({
                type:item.type,
                title:item.title,
                value:item.value
            }));
            if(tempConfiguration.length!==0 && tempConfiguration.some((item)=> item.title===value.title)){
                tempConfiguration.forEach((item)=>{
                    if(item.title===value.title) 
                        item.value=selectedValue
                });
            } else {
                tempConfiguration.push({
                    type:value.type,
                    title:value.title,
                    value:selectedValue
                });
            }
            var productPrediction={counter:0,index:0}
            this.props.product.subProducts.forEach((item,index) =>{
                if(this.checkConfigurationEquality(item.configuration,tempConfiguration)){
                    productPrediction.counter++;
                    productPrediction.index=index;
                    this.setState({partialConfiguration:tempConfiguration});
                    if(tempConfiguration.length===this.configurationLength)
                        this.setState({subProduct:item});
                }
            });
            if(productPrediction.counter===1)
                this.setState({subProduct:this.props.product.subProducts[productPrediction.index]});
        }
    }

    renderCards(){
        $('#ittweb-accelasearch-bar-container').css('overflow-y','hidden');
        return this.props.product.subProducts.map((item,index,array) => 
            <div className={"product-grid-item card"} key={"sub-products-"+item.name+"-"+index} onClick={this.state.selected?()=>{window.location = item.link}:this.clickHandler}> 
                {this.removeIcon}
                <div className="product-counter"> {(index+1)+"/"+array.length}</div>
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
                    <div className="title"> {this.labels["desc"]} </div>
                    <div className="value"> {this.props.product.desc} </div>
                </div>
                <div className="card-footer">
                    <div style={{width:"50%"}}>
                        <div className="secondary-price strikediag"> {this.props.product.price} </div>
                        <div className="price"> {this.props.product.price} </div>
                    </div>
                    <div className="cart-button-container">
                        <button className="cart-button front" onClick={this.buttonClick}> Add To Cart </button>
                        <button className="cart-button back"> DONE </button>
                    </div>
                </div> 
            </div>
        )
    }
                     
    buttonLabel(){
        if(this.props.product.with_option)
            return 'To product details';
        if(this.props.product.type===SettingItem.TYPE_CONFIGURABLE && !this.state.selected)
            return 'Configure Product';
        if(this.props.product.type===SettingItem.TYPE_GROUP && !this.state.selected)
            return 'Show Detail';
        else
            return 'Add To Cart';
    }

    render() {
        var settings = {
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            centerMode: true
          };
        return (
        !this.state.selected || this.props.product.subProducts.length===0?
        <div> { !this.state.selected?this.renderVariant():null }
        <div className={this.state.selected?"selected product-list-item card":"product-list-item card"} onClick={this.state.selected || this.props.product.with_option?()=>{window.location = this.props.product.link}:this.clickHandler} style={{zIndex:this.props.product.subProducts.length}}> 
            {this.removeIcon}
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
                        <div className="cart-button-container">
                            <button className="cart-button front" onClick={(this.props.product.type===SettingItem.TYPE_CONFIGURABLE || this.props.product.type===SettingItem.TYPE_GROUP) && !this.state.selected?null:this.props.product.with_option?()=>{window.location = this.props.product.link}:this.buttonClick}> {this.buttonLabel()} </button>
                            <button className="cart-button back"> DONE </button>
                        </div>
                    </div>
                </div>
            </div>
            <img className="image" src={this.props.product.image} alt=""/>
            <div className="short_desc">
                <div className="title"> {this.labels["short_desc"]} </div>
                <div className="value"> {this.props.product.short_desc} </div>
            </div>
            <div className="description">
                <div className="title"> {this.labels["desc"]} </div>
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