import React, { Component } from 'react';
import './style/Slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
      {this.props.visible
        ? <div className="sliderContainer">
            <div className="sliderContent">
              <div className="close" onClick={this.props.onCloseboxClick}>x</div>
              <div className="employeeDataHolder">
                <div className="positionHolder">{this.props.currentPosition}</div>
                <div className="nameHolder">{this.props.currentName}</div>
              </div>
              <div className="arrows">
                <div className="left" onClick={this.props.onLeftClick}>&lt;</div>
                <div className="right" onClick={this.props.onRightClick}>&gt;</div>
              </div>
            </div>
          </div>
        : <div></div>
      }
      </div>
    );
  }
}

export default Slider;
