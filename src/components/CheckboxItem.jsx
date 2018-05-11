import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import Checkbox from 'material-ui/Checkbox';
// import ActionFavorite from 'material-ui/svg-icons/action/favorite';
// import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
// import Visibility from 'material-ui/svg-icons/action/visibility';
// import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

export default class CheckboxItem extends React.Component {
    constructor(){
        super();
        this.state={
            isExpanded:false
        }
    }

    expandRender(){
        if(this.props.labels.length>5 && !this.state.isExpanded)
        return <FontIcon onClick={() => this.setState({isExpanded:true})} className="material-icons expand-item">keyboard_arrow_down</FontIcon>
    }

    render() {
        var value=this.props.value===undefined?[]:this.props.value;
        return (
            <div>
                {this.props.labels.map((label, i) =>{
                    return <div key={"checkbox-container"+label.value + i} className="checkbox-container" style={{display: (i<5 || (i>=5 && this.state.isExpanded)) && (value.length===0?true:value.every((valueItem)=>label.value!==valueItem.value))?"flex":"none"}} >
                        <div style={{display: "flex",alignItems: 'center'}}> 
                            <span style={{display: (i<5 || (i>=5 && this.state.isExpanded)) && (value.length===0?true:value.every((valueItem)=>label.value!==valueItem.value))?"flex":"none"}}> {label.resultsCount}</span>
                            <Checkbox  
                                className={value.indexOf(label)!==-1?"checkbox-item checkbox-class-"+label.value+ i+"-checked":"checkbox-item checkbox-class-"+label.value+ i}
                                key={label.value + i} labelStyle={{fontSize: '25px', marginTop: '5%'}} iconStyle={{width:'40px',height:'40px'}} style={{display: (i<5 || (i>=5 && this.state.isExpanded)) && (value.length===0?true:value.every((valueItem)=>label.value!==valueItem.value))?"flex":"none"}} 
                                checked={value.indexOf(label)!==-1} value={label.value} label={label.value} onCheck={(value) => this.props.clickHandler(value,label)}/>
                        </div>
                    </div>}
                )}
                {this.expandRender()}
            </div>
        );
    }
}