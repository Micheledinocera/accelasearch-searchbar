import React from 'react';
// import Chip from 'material-ui/Chip';
import SettingItem from '../models/SettingItem';
import FontIcon from 'material-ui/FontIcon';

export default class ActiveFilterItem extends React.Component {
    render() {
        var removeIconWhite=<FontIcon style={{ color:"white"}} onClick={this.props.activeFilterClick} className="material-icons delete-active-filter">close</FontIcon>;
        var chipValue=this.props.type===SettingItem.TYPE_RANGE?this.props.value[0]+ " - " + this.props.value[1]:this.props.value;
        return (
            <div className="active-filter-tag">
                <div className="title"> {this.props.title + ": "} </div>
                <div className="value"> {chipValue} </div>
                {removeIconWhite}
            </div>
        );
    }
    // <Chip backgroundColor={this.props.theme.palette.primary1Color} onRequestDelete={this.props.activeFilterClick}> {this.props.title + ": " + chipValue} </Chip>
}