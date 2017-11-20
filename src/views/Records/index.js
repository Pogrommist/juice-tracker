import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.css';

export class Records extends Component {
  render () {
    return (
      <div className='juice-tracker-Records'>
        <div className='juice-tracker-header'>
          <Link to='/login' className='juice-tracker-navlink'>Войти</Link>
        </div>
      </div>
    )
  }
}
