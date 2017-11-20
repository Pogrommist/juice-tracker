import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.css';

export class LoginPage extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='/records'>Записи</Link>
      </div>
    )
  }
}
