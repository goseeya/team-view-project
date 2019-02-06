import React, { Component } from 'react';
import './style/EmployeeItem.css';

class EmployeeItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="employeeItem">
          <div className="contact">
            <img className="envelope" onClick={this.props.onContactClick} src="./envelope.png" alt="Envelope"/>
          </div>
          <div className="avatarContainer" onClick={this.props.onClick}>
            <img className="employeeAvatar" src={this.props.avatar}/>
          </div>
          <p className="employeeName">{this.props.name}</p>
        <p className="employeeRole">{this.props.role}</p>
        <p className="employeeLocation">{this.props.location}</p>
      </div>
    );
  }
}

export default EmployeeItem;
