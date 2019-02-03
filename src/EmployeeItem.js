import React, { Component } from 'react';
import Responsive from 'react-responsive';
import './style/EmployeeItem.css';

const Desktop = props => <Responsive {...props} minWidth={800} />;
const Mobile = props => <Responsive {...props} maxWidth={800} />;


class EmployeeItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="employeeItem">
        <Desktop>
          <div className="contact">
            <img className="envelope" onClick={this.props.onContactClick} src="./envelope.png" alt="Envelope"/>
          </div>
          <div className="avatarContainer" onClick={this.props.onClick}>
            <img className="employeeAvatar" src={this.props.avatar}/>
          </div>
          <p className="employeeName">{this.props.name}</p>
        </Desktop>
        <Mobile>
          <div className="avatarMobile">
            <img className="employeeAvatar" src={this.props.avatar}/>
          </div>
          <p className="employeeName">{this.props.name}</p>
          <p className="employeeMail">{this.props.mail}</p>
        </Mobile>
        <p className="employeeRole">{this.props.role}</p>
        <p className="employeeLocation">{this.props.location}</p>
      </div>
    );
  }
}

export default EmployeeItem;
