import React, { Component } from 'react';
import './style/EmployeeContainer.css';
import EmployeeItem from './EmployeeItem';
import Slider from './Slider';
import { jsonResponse } from './fakeData.js';

class EmployeeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSliderVisible: false,
      currentName: '',
      currentIndex: 0,
      currentPosition: ''
    }
    this.hideSlider = this.hideSlider.bind(this);
    this.onSliderLeftClick = this.onSliderLeftClick.bind(this);
    this.onSliderRighClick = this.onSliderRightClick.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onContactClick = this.onContactClick.bind(this);
  }
  hideSlider() {
    this.setState({
      isSliderVisible: false
    });
  }
  onSliderLeftClick() {
    let workersArray = jsonResponse;
    let newIndex = this.state.currentIndex > 0
      ? this.state.currentIndex - 1
      : this.state.currentIndex;
    this.setState({
      currentIndex: newIndex,
      currentName: workersArray[newIndex].name,
      currentPosition: workersArray[newIndex].role
    })
  }
  onSliderRightClick() {
    let workersArray = jsonResponse;
    let newIndex = this.state.currentIndex < 9
      ? this.state.currentIndex + 1
      : this.state.currentIndex;
    this.setState({
      currentIndex: newIndex,
      currentName: workersArray[newIndex].name,
      currentPosition: workersArray[newIndex].role
    })
  }
  onContactClick(object) {
    window.location.href = `mailto:${object.mail}`;
  }
  onClick(object) {
    let workersArray = jsonResponse;
    this.setState({
      isSliderVisible: true,
      currentIndex: object.id,
      currentName: workersArray[object.id].name,
      currentPosition: workersArray[object.id].role
    })
  }
  render() {
    const employees = jsonResponse.map((object, index) => {
      return (
        <EmployeeItem
          onContactClick={() => this.onContactClick(object)}
          onClick={() => this.onClick(object)}
          key={index}
          avatar={object.imageUrl}
          name={object.name}
          role={object.role}
          mail={object.mail}
          location={object.location} />
      )
    })
    return (
      <div>
        <div className='employeeContainer'>
          {this.state.isSliderVisible
            ? <Slider
                currentName={this.state.currentName}
                currentPosition={this.state.currentPosition}
                onLeftClick={() => this.onSliderLeftClick()}
                onRightClick={() => this.onSliderRightClick()}
                onCloseboxClick={this.hideSlider}
                visible={this.state.isSliderVisible}/>
            : employees}
        </div>
      </div>
    );
  }
}

export default EmployeeContainer;
