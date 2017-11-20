import React, { Component } from 'react';
import { connect } from 'react-redux'
import history from '../../history'
import LoginForm from './LoginForm'
import { logIn } from '../../redux/actions/auth'
import logo from './logo.png'
import './index.css';

class LoginPage extends Component {
  handleSubmit = values => {
    const { logIn } = this.props
    logIn(values)
    console.log('login', values)
    history.push('/records')
  };

  render () {
    return (
      <div className='LoginPage-container'>
        <img src={logo} className='juice-tracker-logo' />
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logIn (data) { return dispatch(logIn(data))}
})

export default connect(null, mapDispatchToProps)(LoginPage)
