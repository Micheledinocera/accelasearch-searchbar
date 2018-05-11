import FontIcon from 'material-ui/FontIcon';
import React from 'react';

export default class GridItem extends React.Component {
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
                <div className="grid-container">
                    {this.props.values.map((item,i)=>
                    <div className={item.value===this.props.selectedValue?"grid-item-container grid-item-class"+item.value+ i+" selected":"grid-item-container grid-item-class"+item.value+ i}>
                        <div className="grid-item-icon"></div>
                        <div className="grid-item-label" key={item + i} style={{display: i<5 || (i>=5 && this.state.isExpanded)?"flex":"none"}} value={item.label} onClick={this.props.gridSelectedhandler}> {item.label} </div>
                    </div>
                    )}
                </div>
                {this.expandRender()}
            </div>

        );
    }
}