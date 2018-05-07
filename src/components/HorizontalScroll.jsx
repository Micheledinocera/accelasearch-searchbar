import React from 'react';

export default class HorizontalScroll extends React.Component {
    render() {
        return (
        <div className="horizontal-scroll"> 
            {
                this.props.mostSearched.map((item,index) =>
                <div key={item+ "_"+index} onClick={this.props.clickHandler}> {item} </div>
            )
            }
        </div>
        );
    }
}