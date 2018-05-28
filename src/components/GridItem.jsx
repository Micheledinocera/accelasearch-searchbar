import FontIcon from 'material-ui/FontIcon';
import React from 'react';

export default class GridItem extends React.Component {
    render() {
        return (
            <div>
                <div className="grid-container">
                    {this.props.values.map((item,i)=>
                    <div className={item.value===this.props.selectedValue?"grid-item-container grid-item-class"+item.value+ i+" selected":"grid-item-container grid-item-class"+item.value+ i}>
                        <div className="grid-item-icon"></div>
                        <div className="grid-item-label" key={item + i} value={item.label} onClick={this.props.gridSelectedhandler}> {item.label} </div>
                    </div>
                    )}
                </div>
            </div>

        );
    }
}