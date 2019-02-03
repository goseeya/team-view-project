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
      currentName: 'EXAMPLE NAME',
      currentIndex: 0,
      currentPosition: ''
    }
    this.updateThisData = this.updateThisData.bind(this);
    this.hideSlider = this.hideSlider.bind(this);
    this.onSliderLeftClick = this.onSliderLeftClick.bind(this);
    this.onSliderRightClick = this.onSliderRightClick.bind(this);
  }
  updateThisData(data, index) {
    this.setState({currentIndex: index});
  }
  hideSlider() {
    this.setState({
      isSliderVisible: false
    })
  }
  onSliderLeftClick() {
    const workersArray = jsonResponse;
    this.setState({
      currentIndex: this.state.currentIndex > 0 ? this.state.currentIndex - 1 : this.state.currentIndex,
      currentName: workersArray[this.state.currentIndex].name,
      currentPosition: workersArray[this.state.currentIndex].role
    })
  }
  onSliderRightClick() {
    const workersArray = jsonResponse;
    this.setState({
      currentIndex: this.state.currentIndex < 9 ? this.state.currentIndex + 1 : this.state.currentIndex,
      currentName: workersArray[this.state.currentIndex].name,
      currentPosition: workersArray[this.state.currentIndex].role
    })
    console.log(this.state.currentIndex)
  }
  render() {
    const changeState = () => {
      this.setSate({
        isSliderVisible: true
      });
    }
    console.log(jsonResponse);
    const employees = jsonResponse.map((object, index) => {
      return (
        <EmployeeItem onContactClick={() => {window.location.href = `mailto:${object.mail}`;console.log(object, object.mail)}} onClick={() => {this.updateThisData(object.name, object.id);this.setState({isSliderVisible: true, currentName: object.name, currentPosition: object.role})}} key={index} avatar={object.imageUrl} name={object.name} role={object.role} location={object.location} />
      )
    })
    return (
      <div className='employeeContainer'>
        {this.state.isSliderVisible
          ? <Slider currentName={this.state.currentName} currentPosition={this.state.currentPosition} onLeftClick={this.onSliderLeftClick} onRightClick={this.onSliderRightClick} onCloseboxClick={this.hideSlider} visible={this.state.isSliderVisible}/>
          : employees}
      </div>
    );
  }
}

export default EmployeeContainer;
