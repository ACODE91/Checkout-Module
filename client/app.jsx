import React, { Component } from 'react'
import css from './styles/styles.css';
import LoginForms from './loginforms.jsx';
import AddressForms from './addressforms.jsx';
import PaymentForms from './paymentforms.jsx';
// import Summary from './summary.jsx';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCheckOut: false,
            loginInfoFilled:false,
            AddressInfoFilled: false,
            PaymentInfoFilled: false 
        }
    }

  handleInitialClick() {
    this.setState({loginInfoFilled: true, clickCheckOut: true});
  }

  handleLogin() {
    this.setState({loginInfoFilled: true, loginInfoFilled: false, AddressInfoFilled: true});
  }

  handleAddress() {
    this.setState({loginInfoFilled: false, AddressInfoFilled:true});
  }

  render() {
    return (
      <div className="container">
          {(!this.state.clickCheckOut) ? <div className="checkout" onClick={this.handleInitialClick.bind(this)}>checkout now</div> : <div></div>}
          {(this.state.loginInfoFilled) ? <LoginForms loginFunc={this.handleLogin.bind(this)}/> : <div></div>}
          {(this.state.AddressInfoFilled) ? <AddressForms addressFunc={this.handleAddress.bind(this)}/> : <div></div>}
          {(this.state.PaymentInfoFilled) ? <PaymentForms /> : <div></div>}
      </div>
    )
  }
}


