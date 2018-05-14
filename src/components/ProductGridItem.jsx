import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import SettingItem from '../models/SettingItem.jsx';
import Slider from "react-slick";
import FontIcon from 'material-ui/FontIcon';
import $ from 'jquery';

export default class ProductGridItem extends React.Component {
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.state={
            clicked:false,
            selected:false,
            subProduct:null,
            partialConfiguration:[]
        }
        this.configurationLength=this.props.product.subProducts.length>0 && this.props.product.subProducts[0].configuration!=null?this.props.product.subProducts[0].configuration.length:0;
        this.retrieveConfigurations = this.retrieveConfigurations.bind(this);
        this.checkSubProductConfiguration = this.checkSubProductConfiguration.bind(this);
        this.checkConfigutrationClassName = this.checkConfigutrationClassName.bind(this);
        this.configurationClick = this.configurationClick.bind(this);
        this.buttonLabel = this.buttonLabel.bind(this);
        this.configurations=[];
        this.removeIcon=<FontIcon onClick={this.clickHandler} className="material-icons close">close</FontIcon>;
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
        event.stopPropagation();
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
                // parentSingleContainer.off("scroll");
            } else {
                parentSingleContainer.addClass("selected");
                // parentSingleContainer.on('scroll',(e) => {
                //     console.log('SCROLLING!');
                //     clearTimeout(parentSingleContainer.data(this, 'scrollTimer'));
                //     parentSingleContainer.data(this, 'scrollTimer', setTimeout(function(){console.log("Haven't scrolled in 250ms!")}, 250));
                //     // singleProductContainer.data(this, 'scrollTimer', setTimeout(that.scrollFinished(e), 250));
                // });
            }
            parentPairContainer=$( event.target ).closest(".pair-product-container");
            if(this.props.index%2===0)
                notSelectedItem=parentPairContainer.find(".second");
            else
                notSelectedItem=parentPairContainer.find(".first");
            
            notSelectedItem.removeClass("selected");
            
            if(notSelectedItem.hasClass("not-selected")){
                notSelectedItem.css("display","block");
                // setTimeout(()=>notSelectedItem.removeClass("not-selected"),300);
                notSelectedItem.removeClass("not-selected");
            } else {
                notSelectedItem.addClass("not-selected");
                // setTimeout(()=>notSelectedItem.css("display","none"),300);   
                notSelectedItem.css("display","none");
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
            <div className={"sub-products product-grid-item card"} key={"sub-products-"+item.name+"-"+index} onClick={this.state.selected?null:this.clickHandler} ref={(node) => {
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

    renderConfigurable(){
        return <div className={"single-product-container "+this.setClassName()} style={{width: this.props.display===SettingItem.DISPLAY_SINGLE_COLUMN?"100%":"50%"}}>
            <div className="product-grid-item card" onClick={this.state.selected?()=>{window.location = this.props.product.link}:this.clickHandler}> 
                {this.removeIcon}
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
                <div className="card-footer">
                    <div style={{width:"50%"}}>
                        <div className="secondary-price strikediag"> {this.props.product.price} </div>
                        <div className="price"> {this.props.product.price} </div>
                    </div>
                    {
                        this.state.subProduct!==null?
                        <button className="cart-button" onClick={(this.props.product.type===SettingItem.TYPE_CONFIGURABLE || this.props.product.type===SettingItem.TYPE_GROUP) && !this.state.selected?null:this.buttonClick}> {(this.props.product.type===SettingItem.TYPE_CONFIGURABLE || this.props.product.type===SettingItem.TYPE_GROUP) && !this.state.selected?'Show Details':'Add To Cart'} </button>:
                        <button className="cart-button disabled" onClick={(event)=>event.stopPropagation()}> Complete Configuration </button>
                    }
                </div>
            </div>
        </div>
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
            infinite: false,
            arrows: false,
            slidesToShow: 1,
            centerMode: true
          };
        return (
            !this.state.selected || this.props.product.subProducts.length===0?
            <div className={"single-product-container "+this.setClassName()} style={{width: this.props.display===SettingItem.DISPLAY_SINGLE_COLUMN?"100%":"50%"}}>
                { this.renderVariant() }
                <div className="product-grid-item card" onClick={this.state.selected  || this.props.product.with_option?()=>{window.location = this.props.product.link}:this.clickHandler} style={{zIndex:this.props.product.subProducts.length}}> 
                    {this.removeIcon}
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
                        <button className="cart-button" onClick={(this.props.product.type===SettingItem.TYPE_CONFIGURABLE || this.props.product.type===SettingItem.TYPE_GROUP) && !this.state.selected?null:this.props.product.with_option?()=>{window.location = this.props.product.link}:this.buttonClick}> {this.buttonLabel()} </button>
                    </div>
                </div>
            </div>:this.props.product.type===SettingItem.TYPE_CONFIGURABLE?
            this.renderConfigurable():
            <Slider {...settings}>
                { this.renderCards()  }
            </Slider>
        );
    }
}