import 'rc-slider/assets/index.css';
import React from 'react';
import SettingItem from '../models/SettingItem.jsx';
// import Slider from 'material-ui/Slider';
import Slider, { Range } from 'rc-slider';
// import Slider from 'react-rangeslider';
// import 'react-rangeslider/lib/index.css';

export default class SliderItem extends React.Component {
    renderRangeOrSlider(){
        if(this.props.type===SettingItem.TYPE_SLIDER){
            var sliderValue=this.props.sliderValue===undefined || this.props.sliderValue===null ? this.props.minMax.min : this.props.sliderValue;
            return(
                <div className={SettingItem.TYPE_SLIDER}>
                    <Slider
                        min={this.props.minMax.min}
                        max={this.props.minMax.max}
                        value={sliderValue}
                        onChange={this.props.handleChangeSlider}
                        onAfterChange={this.props.handleAfterChangeSlider}
                        trackStyle={{ backgroundColor: this.props.theme.palette.primary1Color }}
                        handleStyle={{ backgroundColor: this.props.theme.palette.primary1Color, borderColor:this.props.theme.palette.primary1Color }}
                        // materialSlider onDragStop={this.props.handleAfterChangeSlider}
                    />
                    <div className='value'>{sliderValue}</div>
                </div>
            );
        } else {
            sliderValue=this.props.sliderValue===undefined || this.props.sliderValue===null ? [this.props.minMax.min,this.props.minMax.max] : this.props.sliderValue;
            return(
                <div className={SettingItem.TYPE_RANGE}>
                    <Range
                        min={this.props.minMax.min}
                        max={this.props.minMax.max}
                        value={sliderValue}
                        pushable={10}
                        onChange={this.props.handleChangeSlider}
                        onAfterChange={this.props.handleAfterChangeSlider}
                        trackStyle={[{ backgroundColor: this.props.theme.palette.primary1Color }]}
                        handleStyle={[{ backgroundColor: this.props.theme.palette.primary1Color,borderColor:this.props.theme.palette.primary1Color },{ backgroundColor: this.props.theme.palette.primary1Color,borderColor:this.props.theme.palette.primary1Color }]}
                    />
                    <div className='value'>{sliderValue[0] + ' - ' + sliderValue[1]}</div>
                </div>
            );
        }
    }

    render () {
        return (
            <div className='slider-container'>
                {this.renderRangeOrSlider()}
            </div>
        )
    }
}