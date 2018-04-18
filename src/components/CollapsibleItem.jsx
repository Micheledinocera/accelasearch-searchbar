import React from 'react';
import Collapse, { Panel } from 'rc-collapse';

export default class CollapsibleItem extends React.Component {
    render() {
        return (
            <div className="radio-container">
                <Collapse accordion={true} activeKey={this.props.activeKey} onChange={this.props.selectedCategoryHandler}>
                    { this.props.categories.map((category, i) => 
                        <Panel header={category.name} key={category.name + i} showArrow={false}>  
                            { category.children.map((child, i) =>  <div key={i}> {child.name} {this.props.value}</div> ) }
                        </Panel>)
                    }
                </Collapse>
            </div>
        );
    }
}