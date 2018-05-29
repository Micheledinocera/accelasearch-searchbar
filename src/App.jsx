import 'rc-collapse/assets/index.css';
import FontIcon from 'material-ui/FontIcon';
import React from 'react';
import { getMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faColumns from '@fortawesome/fontawesome-free-solid/faColumns';
// import CollapsibleItem from './components/CollapsibleItem.jsx';
import ProductGridItem from './components/ProductGridItem.jsx';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ProductListItem from './components/ProductListItem.jsx';
import HorizontalScroll from './components/HorizontalScroll.jsx';
import ActiveFilterItem from './components/ActiveFilterItem.jsx'
import RadioGroupItem from './components/RadioGroupItem.jsx'
import SliderItem from './components/SliderItem.jsx';
import CheckboxItem from './components/CheckboxItem.jsx';
import RatingItem from './components/RatingItem.jsx';
import GridItem from './components/GridItem.jsx';
// import Input from 'react-speech-recognition-input';
import SpeechRecognition from 'react-speech-recognition';
// import { VoicePlayer, VoiceRecognition } from 'react-voice-components'
import { ReactMic } from 'react-mic';
import SettingItem from './models/SettingItem.jsx'
import Labels from './models/Labels.jsx'
import DummyData from './DummyData.jsx'
import $ from 'jquery';
import Collapse, { Panel } from 'rc-collapse';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startRecognition: false,
      isSearching: false,
      isWriting: false,
      mostSearchedCategories:DummyData.getDummyMostSearched(),
      maybeLookingFor:DummyData.getDummyMaybeLooking(),
      filtersVisibility: false,
      productsDisplay:SettingItem.DISPLAY_DOUBLE_COLUMN,
      settings:[],
      activeFilters:[],
      searchValue:"",
      selectedHint:DummyData.getDummyMostSearched()[0].title,
      data : [],
      activeKeys:[],
      orderChosen:SettingItem.ORDER_LIST[0],
      minChars: DummyData.getMinChars(),
      rows: DummyData.getRows(),
      startRows: 0,
      banner_type: SettingItem.BANNER_TYPE_SMALL,
      banner: DummyData.getBanner(),
      numFound:0
    }
    // this.barWidth=parseInt(this.props.barWidth,10);
    this.url = SettingItem.url;
    // this.secondUrl = 'http://localhost:8080/api/react?value=a';
    // this.secondUrl = 'http://localhost:8080/api/react?value=a';
    const SpeechRecognition = window.SpeechRecognition
      || window.webkitSpeechRecognition
      || window.mozSpeechRecognition
      || window.msSpeechRecognition
      || window.oSpeechRecognition
    this.isVoiceRecognitionSupported=SpeechRecognition!==undefined;
    if(this.isVoiceRecognitionSupported){
      this.recognition = new SpeechRecognition();
      /*  en-US, en-GB, es-ES, fr-FR, it-IT, de-DE, ja-JP, pt-BR, zh-CN */
      this.recognition.lang="en-GB";
      this.recognition.addEventListener('result',  (value) => {
        this.setState({ startRecognition: false });
        $('#ittweb-accelasearch-bar-layer').val(value.results[0][0].transcript);
        this.closeSearchPanel();
        this.handleChange();
      })
    }
    this.labels=Labels.getLabels(document.documentElement.lang);
    this.productToDeselect=null;
    this.handleChange = this.handleChange.bind(this);
    this.deselectAllProducts = this.deselectAllProducts.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
    this.showLayer = this.showLayer.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.fromObjectToArray = this.fromObjectToArray.bind(this);
    this.handleChangeSlider = this.handleChangeSlider.bind(this);
    this.buildSuggestions = this.buildSuggestions.bind(this);
    this.updateStartRows = this.updateStartRows.bind(this);
    this.convertResponseToFilters = this.convertResponseToFilters.bind(this);
    this.convertResponseToProducts = this.convertResponseToProducts.bind(this);
    this.horizontalClick = this.horizontalClick.bind(this);
    this.ratingSelectedhandler = this.ratingSelectedhandler.bind(this);
    this.openSearchLayer = this.openSearchLayer.bind(this);
    this.handleAfterChangeSlider = this.handleAfterChangeSlider.bind(this);
    this.activeFilterClick = this.activeFilterClick.bind(this);
    this.voiceRecognize = this.voiceRecognize.bind(this);
    this.selectedCategoryHandler = this.selectedCategoryHandler.bind(this);
    this.radioSelectedhandler = this.radioSelectedhandler.bind(this);
    this.websiteSearchBar=$('#search');
    // this.websiteSearchBar.on("change paste keyup",this.handleChange);
    this.websiteSearchBar.on("focus",this.showLayer);
    this.primaryColor="#306ccc";
    this.secondaryColor="#4f8fed";
    // fetch("config.json")
    // .then(result=>{console.log(result);return result.json()})
    // .then(settings=>{
    //   console.log(settings);
    //   this.setState({
    //     minChars:settings.minChars
    //   })
    // })
    this.muiTheme = getMuiTheme({
        palette:{
          primary1Color:this.secondaryColor,
          primary2Color:this.secondaryColor,
          primary3Color:this.secondaryColor,
          accent1Color:this.secondaryColor,
          accent2Color:this.secondaryColor,
          accent3Color:this.secondaryColor
        }
      }
    );
 }

convertResponseToProducts(data){
  data.map((item)=>item._configurations===undefined?item._configurations=[]:null);
  return data;
}

convertResponseToFilters(settings){
  var settingtemp=[];
  settingtemp.push(new SettingItem({
    type:SettingItem.TYPE_CHECKBOX,
    title:"Categories",
    values:this.fromObjectToArray(settings.facet_fields.categories,"value","resultsCount"),
    selectedValue:[]
  }));
  settingtemp.push(new SettingItem({
    type:SettingItem.TYPE_RANGE,
    title:"Price",
    values:this.fromObjectToRangeValues(settings.facet_fields.price),
    selectedValue:[]
  }));
  var attributes = [];
  Object.keys(settings.facet_fields.attributes).forEach(item=>attributes.push({title:item,values:settings.facet_fields.attributes[item]}));
  attributes.forEach((item)=>
    settingtemp.push(new SettingItem({
      type:SettingItem.TYPE_GRID,
      title:item.title,
      values:this.fromObjectToArrayAttributes(item.values,"label","value"),
      selectedValue:[]
  })));
  return settingtemp;
}

fromObjectToRangeValues(object){
  var max=Math.max.apply(Math, Object.keys(object));
  var min=Math.min.apply(Math, Object.keys(object));
  return {min:min,max:max};
}

fromObjectToArray(object,key1,key2){
  var array= []
  var activeFilters=this.state.activeFilters;
  Object.keys(object).forEach((item)=>{
    if (activeFilters.every((filterItem)=>item!==filterItem.label))
      array.push({[key1]:item,[key2]:object[item]})
    // array.push({[key1]:item.split(",")[item.split(",").length-1],[key2]:object[item]})
      
  });
  return array;
}

fromObjectToArrayAttributes(object,key1,key2){
  var array= []
  Object.keys(object).forEach((item)=>
    array.push({[key1]:item,[key2]:item})
  );
  return array;
}

handleChange() {
  var startRows=0;
  if($('#ittweb-accelasearch-bar-layer')[0].value!==this.state.searchValue){
    this.setState({startRows:0});
  } else {
    startRows=this.state.startRows;
  }
  if($('#ittweb-accelasearch-bar-layer')[0].value!==undefined && $('#ittweb-accelasearch-bar-layer')[0].value.length>0)
    this.setState({isWriting:true});
  else
    this.setState({isWriting:false});
  if($('#ittweb-accelasearch-bar-layer')[0].value.length>=this.state.minChars){
    // var data=$('#ittweb-accelasearch-bar-layer')[0].value==="vuoto"?{results:[]}:DummyData.getDummyProducts();
    // this.setState({data:data.results});
    this.setActiveFilters();
    fetch(this.url+$('#ittweb-accelasearch-bar-layer')[0].value+"&start="+startRows+"&rows="+this.state.rows)
      .then(result=>{
        if(result.status !== 403)
          return result.json();
        else 
          return [];
      })
      .then(response=>{
        console.log(response);
        var mostSearchedCategoriesTemp=this.state.mostSearchedCategories;
        mostSearchedCategoriesTemp[2].values=this.buildSuggestions(response["suggested-keywords"]);
        var data=this.state.data;
        this.setState({
          numFound:response.response.numFound,
          maybeLookingFor:this.buildSuggestions(response["suggested-keywords"]),
          mostSearchedCategories:mostSearchedCategoriesTemp,
          data:response.response.start>0?data.concat(this.convertResponseToProducts(response.response.docs)):this.convertResponseToProducts(response.response.docs),
          settings:this.convertResponseToFilters(response.facet_counts)
        });
        // this.forceUpdate();
        // if(items === [])
        //   this.setState({data:{results:[]}});
        // else
        //   this.setState({data:{results:items.data.results}});
      })
      .catch(error=>console.log(error));
    this.setState({searchValue: $('#ittweb-accelasearch-bar-layer')[0].value});
    if($('#ittweb-accelasearch-bar-layer')[0].value!=="shoes"){
      this.setState({banner:""});
      $(".banner-value").html("");
      $(".banner").css("display","none");
    } else {
      this.setState({banner:DummyData.getBanner()});
      $(".banner-value").html(this.state.banner);
      $(".banner").css("display","block");
    }
    this.deselectAllProducts();
  }
}

updateStartRows(){
  this.setState({startRows:10},this.handleChange());
}

buildSuggestions(data){
  if(data.collations.length>0){
    var collationsTemp=data.collations.filter((item,index)=>index%2===1);
    return collationsTemp.map((item)=>item.collationQuery);
  } else if(data.suggestions.length>0){
    return data.suggestions.filter((item,index)=>index%2===1)[0].suggestion;
  } else 
    return [];
}

showLayer() {
  //this.websiteSearchBar.blur();
  //var data=$('#ittweb-accelasearch-bar-layer')[0].value==="vuoto"?{results:[]}:DummyData.getDummyProducts();
  this.setState({data:{results:[]}});
  this.setActiveFilters();
  $('#ittweb-accelasearch-bar-container').css('display','flex');
  setTimeout(() => {
    $('#ittweb-accelasearch-bar-container').css('opacity','1');
    $('#ittweb-accelasearch-bar-layer').focus()
  },100);
}

setItemValue(item){
  var tempSettings=this.state.settings;
  var index =tempSettings.indexOf(item);
  tempSettings[index]=item;
  this.setState({settings:tempSettings});
  this.handleChange();
}

setActiveFilters(){
  var activeFilters=[];
  this.state.settings.forEach((item) => {
    if(item.selectedValue !== null && item.selectedValue !== undefined && item.selectedValue.length !== 0 && item.selectedValue !== "")
      if(item.type!==SettingItem.TYPE_CHECKBOX)
        activeFilters.push({
          label:item.title,
          value:item.selectedValue,
          type: item.type
        })
      else
        item.selectedValue.forEach((value)=>{
          activeFilters.push({
            label:item.title,
            value:value.value,
            type: item.type
          })
        })
    });
  this.setState({activeFilters:activeFilters});
}

selectedCategoryHandler(activeKey,item){
  item.setSelectedValue(activeKey);
  this.setItemValue(item);
}

handleChangeSlider(value, item){
  item.setSelectedValue(value)
  this.setItemValue(item);
}

handleAfterChangeSlider(value,item){
  item.setSelectedValue(value);
  this.setItemValue(item);
  this.handleChange();
}

horizontalClick(event){
  var value=event.target.innerText;
  value= value.replace(",", "");
  this.setState({searchValue:value});
  $("#ittweb-accelasearch-bar-layer").val(value);
  this.handleChange();
}

ratingSelectedhandler(value,item){
  item.setSelectedValue(value);
  this.setItemValue(item);
}

checkboxHandler(value,label,item){
  item.selectedValue=!item.selectedValue?[]:item.selectedValue;
  if(value.target.checked)
    item.selectedValue.push(label);
  else
    item.selectedValue.splice(item.selectedValue.indexOf(label),1);
  var tempSettings=this.state.settings;
  var index =this.state.settings.indexOf(item);
  tempSettings[index]=item;
  this.setState({settings:tempSettings});
  this.handleChange();
}

toggleProductView(){
  if(this.state.productsDisplay===SettingItem.DISPLAY_GRID)
    this.setState({productsDisplay:SettingItem.DISPLAY_LIST})
  else
    this.setState({productsDisplay:SettingItem.DISPLAY_GRID})
  this.forceUpdate();
}

activeFilterClick(item){
  var tempSettings=this.state.settings;
  tempSettings.forEach((setting)=>{
    if(setting.title===item.label)
      if(setting.type!==SettingItem.TYPE_CHECKBOX)
        setting.selectedValue=null;
      else 
        setting.selectedValue=setting.selectedValue.filter((value)=>value.value!==item.value);
      //setting.selectedValue=setting.type===SettingItem.TYPE_CHECKBOX?[]:null;
  })
  this.setState({settings:tempSettings});
  this.handleChange();
}

removeAllActiveFilters(){
  var tempSettings=this.state.settings;
  tempSettings.forEach((setting)=>{
      setting.selectedValue=setting.type===SettingItem.TYPE_CHECKBOX?[]:null;
  })
  this.setState({settings:tempSettings});
  this.handleChange();
}

componentWillMount(){
  this.state.settings.forEach((item,i) =>{
    var tempKeys=this.state.activeKeys;
    tempKeys.push(item.type + item.title + i);
    this.setState({activeKeys:tempKeys});
  })
}

componentDidMount(){
  $('#ittweb-accelasearch-bar-layer').on("keyup paste",this.handleChange);
  $('#ittweb-accelasearch-bar-layer').on("keyup focus paste",this.openSearchLayer);
}

componentDidUpdate(prevProps,prevState){
  if(prevState.startRows<this.state.startRows)
    this.handleChange();
}

openSearchLayer(event){
  if(event.target.value.length>=3){
    this.closeSearchPanel();
  } else {
    this.openSearchPanel();
  }
}

openSearchPanel(){
  //$('.header').css('height','100%');
  $('.filter').css('display','none');
  $('.horizontal-scroll').css('display','none');
  $('.hint').css('display','none');
  // $('.search-bar-container').css('top','50%');
  this.setState({isSearching:true});
}

openSearchPanelHalf(){
  //$('.header').css('height','100%');
  $('.filter').css('display','none');
  $('.horizontal-scroll').css('display','none');
  $('.hint').css('display','none');
  //$('.search-bar-container').css('top','25%');
  $('#ittweb-accelasearch-bar-layer').prop('disabled',true);
  this.setState({isSearching:true});
}

closeSearchPanel(){
  //$('.header').css('height','100px');
  $('.filter').css('display','flex');
  $('.horizontal-scroll').css('display','flex');
  $('.hint').css('display','flex');
  $('.search-bar-container').css('top','0');
  $('#ittweb-accelasearch-bar-layer').prop('disabled',false);
  $('.sound-wave').css('display','none');
  this.setState({
    isSearching:false,
    startRecognition:false
  });
}

toggleFilter(item){
  var tempKeys=this.state.activeKeys;
  var index=tempKeys.indexOf(item);
  if(index===-1)
    tempKeys.push(item)
  else  
    tempKeys.splice(index,1)
  this.setState({activeKeys:tempKeys});
}

toggleCollapse(value){
  this.setState({activeKeys:value});
}

radioSelectedhandler(value,item){
  item.setSelectedValue(value.target.value);
  this.setItemValue(item);
}

gridSelectedhandler(value,item){
  item.setSelectedValue(value.target.innerText);
  this.setItemValue(item);
}

closePanel() {
  $('#ittweb-accelasearch-bar-container').css('opacity','0');
  setTimeout(() => $('#ittweb-accelasearch-bar-container').css('display','none'),100);
}

deselectAllProducts() {
  var tempProducts=this.state.data!==undefined?this.state.data:[];
  var productToDeselect=null;
  if(tempProducts.length>0 && tempProducts[0].isSelected!==undefined){
    tempProducts.some((item)=>{
      if(item.isSelected===true){
        productToDeselect=item;
        return true;
      } else
        return false;
    });
    tempProducts.map((item)=>item.isSelected=false);
  };
  this.setState({data:tempProducts});
  $('#ittweb-accelasearch-bar-container').css('overflow-y','auto');
  return productToDeselect;
}

selectProduct(product){
  var tempProducts=this.state.data;
  tempProducts.map((item)=>item.sku===product.sku?item.isSelected=true:item.isSelected=false);
  this.setState({data:tempProducts});
  this.forceUpdate();
}

renderActiveFilters(){
  // var removeIcon=<FontIcon style={{cursor:"pointer",float:"right",margin: "7px"}} onClick={() => this.removeAllActiveFilters()} className="material-icons">close</FontIcon>;
  if(this.state.activeFilters.length >0)
    return(
      <div className="active-filters-container">
        {/*removeIcon*/}
        <div className="remove-active-filters" onClick={() => this.removeAllActiveFilters()}> {this.labels["remove_active_filters"]} </div>
        <Collapse defaultActiveKey="0">
          <Panel className="active-filters-header" header={this.labels["active_filters"]+" (" + this.state.activeFilters.length + ")"} >
            {this.state.activeFilters.map((item,i) => {
              return <ActiveFilterItem key={item.label + i} theme={this.muiTheme} index={i} title={item.label} value={item.value} type={item.type} activeFilterClick={() => this.activeFilterClick(item)}/>
            })}
          </Panel>
        </Collapse>
      </div>
    );
}

renderIcon(){
  var removeIcon=<FontIcon onClick={() => this.closePanel()} className="material-icons close">close</FontIcon>;
  // var removeIconSearchPanel=<FontIcon onClick={() =>this.closeSearchPanel()} className="material-icons close search">close</FontIcon>;
  // if(this.state.isSearching)
  //   return removeIconSearchPanel;
  // else 
  return removeIcon;
}

voiceRecognize(){
  if (this.state.startRecognition){
    this.recognition.stop();
    this.closeSearchPanel();
  } else {
    this.openSearchPanelHalf();
    $('.sound-wave').css('display','block');
    this.recognition.start();
  }
  this.setState({startRecognition:!this.state.startRecognition})
}

onStopRecording(recordedBlob){
  console.log(recordedBlob);
}

render() {
  if(this.state.data === undefined){
    this.setState({data:[]});
  }
  var moreButton=<div className="more_results_button" style={{display:this.state.rows*(this.state.startRows+1)>this.state.data.length?"none":"block"}}><button onClick={this.updateStartRows}> MORE AND MORE </button> </div>
  var removeIconWhite=<FontIcon style={{ color:"white"}} onClick={() => {this.setState({filtersVisibility: false});$('#ittweb-accelasearch-bar-container').css('overflow',"auto");}} className="material-icons close">close</FontIcon>;
  var filterIcon=<div className="filter" onClick={() => {
    this.setState({filtersVisibility: true});
    window.scrollTo(0,0);
    $('#ittweb-accelasearch-bar-container').animate({scrollTop: 0 }, 500);
    $('#ittweb-accelasearch-bar-container').css('overflow',"hidden");
    }}>
    <div className="Oval"> <span> {this.state.activeFilters.length} </span> </div>
    <FontIcon className={"material-icons filter-icon"}>filter_list</FontIcon>
  </div>;
  return (
    <MuiThemeProvider muiTheme={this.muiTheme}>
    <div id="ittweb-accelasearch-bar-container" /*style={{width:this.barWidth}}*/ onClick={this.deselectAllProducts}>    
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <div className="header">
        { this.renderIcon() }
        { filterIcon }
        <div className="search-bar-container">
          <input className="search-bar" type="text" id="ittweb-accelasearch-bar-layer"/>
          {this.state.isWriting?
            <FontIcon onClick={() => {
              $("#ittweb-accelasearch-bar-layer").val("");
              this.handleChange();
              this.openSearchPanel();
              $("#ittweb-accelasearch-bar-layer").focus();
            }} className="material-icons mic">cancel</FontIcon>:
            <FontIcon onClick={this.isVoiceRecognitionSupported?() => this.voiceRecognize():null} className="material-icons mic">{this.state.startRecognition || !this.isVoiceRecognitionSupported?"mic_off":"mic"}</FontIcon>
          }
          {/*<ReactMic
            record={this.state.startRecognition}
            className="sound-wave"
            onStop={this.onStopRecording}
            strokeColor="#4f8fed"
          backgroundColor="#FFFFFF" />*/}
        </div>
      </div>
      <div className="layer-container">
        <div className={this.state.filtersVisibility?"filter-container show":"filter-container hide"}>
          <div className="filter-overlay">
            { removeIconWhite }
            <div className="filter-title"> {this.labels["filters"]} </div>
            <div className="center-column">
              {this.renderActiveFilters()}
              <div className="filter-selection">
              <Collapse activeKey={this.state.activeKeys} onChange={(value) => this.toggleCollapse(value)}>
              {
                this.state.settings.map((item,i) => {
                  switch(item.type){
                    // case SettingItem.TYPE_SLIDER:
                      // return <Panel header={item.title} key={item.type + item.title + i} showArrow={true} >
                      //   <SliderItem 
                      //     key={item.title + i} title={item.title} theme={this.muiTheme} type={item.type} sliderValue={item.selectedValue} minMax={item.values} handleAfterChangeSlider={(value) => this.handleAfterChangeSlider(value,item)} handleChangeSlider={(value) => this.handleChangeSlider(value,item)}/>
                      // </Panel>
                    case SettingItem.TYPE_RANGE:
                      return <Panel header={item.title} key={item.type + item.title + i} showArrow={true}>
                        <SliderItem
                          key={item.title + i} title={item.title} theme={this.muiTheme} type={item.type} sliderValue={item.selectedValue} minMax={item.values} handleAfterChangeSlider={(value) => this.handleAfterChangeSlider(value,item)} handleChangeSlider={(value) => this.handleChangeSlider(value,item)}/>
                      </Panel>
                    case SettingItem.TYPE_CHECKBOX:
                      return <Panel header={item.title} key={item.type + item.title + i} showArrow={true} style={{display:item.selectedValue!==undefined && item.selectedValue.length===item.values.length?"none":""}}> 
                      <CheckboxItem 
                        key={item.title + i} title={item.title} labels={item.values} value={item.selectedValue} clickHandler={(value,label) => this.checkboxHandler(value, label,item)}/>
                        </Panel>
                    case SettingItem.TYPE_RADIO:
                      return <Panel header={item.title} key={item.type + item.title + i} showArrow={true} style={{display:item.selectedValue?"none":""}}> 
                      <RadioGroupItem 
                        key={item.title + i} title={item.title} values={item.values} selectedValue={item.selectedValue} radioSelectedhandler={(value) => this.radioSelectedhandler(value,item)}/>  
                        </Panel>
                    case SettingItem.TYPE_GRID:
                      return <Panel header={item.title} key={item.type + item.title + i} showArrow={true} style={{display:item.selectedValue?"none":""}}> 
                      <GridItem 
                        key={item.title + i} title={item.title} values={item.values} selectedValue={item.selectedValue} gridSelectedhandler={(value) => this.gridSelectedhandler(value,item)}/>  
                        </Panel>
                    case SettingItem.TYPE_RATING:
                      return <Panel header={item.title} key={item.type + item.title + i} showArrow={true}> 
                      <RatingItem 
                        key={item.title + i} title={item.title} theme={this.muiTheme} selectedValue={item.selectedValue} ratingSelectedhandler={(value) => this.ratingSelectedhandler(value,item)}/>
                        </Panel>
                    default:
                      return "";
                  }}
                )}
                </Collapse>
                </div>
              </div>
            </div>
        </div>
        <div className="results-container">
        { this.state.data.length>0?
          <div style={{marginTop: "80px"}}>
          <div className="hint"> 
            { this.state.mostSearchedCategories.map(
              (item,index)=> <span className={this.state.selectedHint===item.title?"selected":""} onClick={(event)=>{
                this.setState({selectedHint:item.title});
              }}> {this.labels[item.title]} </span>
            ) }
          </div>
          <HorizontalScroll mostSearched={this.state.mostSearchedCategories.filter((item)=>item.title===this.state.selectedHint)[0].values} clickHandler={this.horizontalClick}/>
          {/*<div className="maybe-label"> Forse cercavi</div>
          <HorizontalScroll mostSearched={this.state.maybeLookingFor} clickHandler={this.horizontalClick} />*/}
          <div className="results-container-header">
            <div className="results-number"> {this.state.numFound} </div>
            <div className="results-label"> Results </div>
            <div className="results-order"> 
              <SelectField
                value={this.state.orderChosen}
                onChange={(event, index, value) => {
                  this.setState({orderChosen: value});
                  this.handleChange();
                }}
                style={{width:"100%", border: "solid 1px lightgray",borderRadius: "10px", paddingLeft: "10px",marginTop: "5px"}}
                labelStyle={{fontSize:"37px",color:"ligthgray"}}
                maxHeight={300}>
                  {
                    SettingItem.ORDER_LIST.map((item,index)=>
                      <MenuItem value={item} key={item + index} primaryText={item} style={{fontSize:"37px",color:"ligthgray",marginTop:"20px"}}/>
                  )}
              </SelectField>
            </div>
          </div>
          <div className="layout-icons" style={{display:"flex"}}>
            <FontAwesomeIcon onClick={() => this.setState({productsDisplay:SettingItem.DISPLAY_DOUBLE_COLUMN})} icon={faColumns} style={{color:this.state.productsDisplay===SettingItem.DISPLAY_DOUBLE_COLUMN?this.secondaryColor:'black'}} />
            <div className="fonticon">
              <FontIcon onClick={() => this.setState({productsDisplay:SettingItem.DISPLAY_LIST})} className="material-icons" style={{color:this.state.productsDisplay===SettingItem.DISPLAY_LIST?this.secondaryColor:'black'}}>view_list</FontIcon>
            </div>
            <div className="fonticon">
              <FontIcon onClick={() => this.setState({productsDisplay:SettingItem.DISPLAY_SINGLE_COLUMN})} className="material-icons" style={{color:this.state.productsDisplay===SettingItem.DISPLAY_SINGLE_COLUMN?this.secondaryColor:'black'}}>view_days</FontIcon>
            </div>
          </div>
          { this.state.productsDisplay!==SettingItem.DISPLAY_LIST?
          <div className={this.state.productsDisplay===SettingItem.DISPLAY_SINGLE_COLUMN?SettingItem.DISPLAY_SINGLE_COLUMN:SettingItem.DISPLAY_DOUBLE_COLUMN} style={{marginBottom:"150px"}}>
            {
              this.state.productsDisplay===SettingItem.DISPLAY_SINGLE_COLUMN?
                this.state.data.map((product, i) => <div id={"product_"+product.sku} className="product-container-with-sku"> <ProductGridItem theme={this.muiTheme} product={product} selectProduct={this.selectProduct} deselectAllProducts={this.deselectAllProducts} key={"single-column" + product.name + i} index={i} display={this.state.productsDisplay}> </ProductGridItem> </div>) :
                this.state.data.map((product, i, array) => 
                  i%2===0? 
                    <div className="pair-product-container">
                      <div id={"product_"+product.sku} className={product.isSelected?"product-container-with-sku selected":array[i+1]!==undefined && array[i+1].isSelected?"product-container-with-sku not-selected":"product-container-with-sku"}> <ProductGridItem theme={this.muiTheme} product={product} pairProduct={array[i+1]} key={"double-column" + product.name + i} index={i} display={this.state.productsDisplay} deselectAllProducts={this.deselectAllProducts} selectProduct={this.selectProduct}> </ProductGridItem> </div>
                      {array[i+1]!==undefined?
                        <div id={"product_"+array[i+1].sku} className={array[i+1].isSelected?"product-container-with-sku selected":product.isSelected?"product-container-with-sku not-selected":"product-container-with-sku"}> <ProductGridItem theme={this.muiTheme} product={array[i+1]} pairProduct={product} key={"double-column" + product.name + i+1} index={i+1} display={this.state.productsDisplay} deselectAllProducts={this.deselectAllProducts} selectProduct={this.selectProduct}> </ProductGridItem> </div>:
                        null
                      }
                    </div>:
                    null
                )
            }
            {moreButton}
            </div>:
            <div style={{marginBottom:"150px"}}>
              {this.state.data.map((product, i) => <div id={"product_"+product.sku} className="product-container-with-sku"> <ProductListItem  theme={this.muiTheme} product={product} key={"single-column" + product.name + i} index={i} display={this.state.productsDisplay} deselectAllProducts={this.deselectAllProducts} selectProduct={this.selectProduct}> </ProductListItem></div>)}
              {moreButton}
            </div>
          }
          </div>:this.state.searchValue.length>=this.state.minChars?
          <div>
            <div className="no-results-label"> {this.labels["no_results"]} </div>
            <div className="maybe-label-no-results"> {this.labels["maybe_looking"]+":"} </div>
            <div className="maybe-value"> {this.state.maybeLookingFor.map(
              (item,index,array) => <span className="maybe-value-item" onClick={this.horizontalClick}> {item + (index+1===array.length?"":",")} </span>
            )}
            </div>
          </div>:null
        }
        </div>
      </div>
      
      <div className="banner" style={{height:this.state.banner_type===SettingItem.BANNER_TYPE_LARGE?"25vh":"8vh"}}>
        <div className="banner-close"> 
          <FontIcon onClick={(e) => {
            e.preventDefault();
            this.setState({banner:""});
            $(".banner-value").html(this.state.banner);
            $(".banner").css("display","none");
          }} className="material-icons">close</FontIcon>
        </div>
        <div className="banner-value"> </div>
      </div>
    </div>
    </MuiThemeProvider>
  );
  // this.state.data.map((product, i) => <ProductListItem product={product} key={i}> </ProductListItem>)
  // <button className="toggle-list" onClick={this.toggleProductView.bind(this)} style={{left:Math.max(this.barWidth*0.9,850)}}> Toggle view </button>
  // <CollapsibleItem 
  //  key={item.title + i} title={item.title} categories={item.values} activeKey={item.selectedValue} selectedCategoryHandler={(value) => this.selectedCategoryHandler(value,item)}/>  
 }
}

export default App;