import FontIcon from 'material-ui/FontIcon';
import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export default class RadioGroupItem extends React.Component {
    constructor(){
        super();
        this.state={
            isExpanded:false
        }
    }

    expandRender(){
        if(this.props.values.length>5 && !this.state.isExpanded)
            return <FontIcon onClick={() => this.setState({isExpanded:true})} className="material-icons expand-item">keyboard_arrow_down</FontIcon>
    }

    render() {
        return (
            <div>
                <div className="radio-container">
                    <RadioButtonGroup name={this.props.title} valueSelected={this.props.selectedValue} onChange={this.props.radioSelectedhandler}>
                        {this.props.values.map((item,i)=>
                            <RadioButton key={item + i} labelStyle={{fontSize: '25px'}} iconStyle={{width:'40px',height:'40px'}} style={{display: i<5 || (i>=5 && this.state.isExpanded)?"flex":"none"}} className="radio-item" value={item.value} label={item.value}>
                            </RadioButton>
                        )}
                    </RadioButtonGroup>
                </div>
                {this.expandRender()}
            </div>

        );
    }
}