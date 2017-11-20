import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.css';

export class Records extends Component {
  render () {
    return (
      <div className='Records'>
        <p>
          records
        </p>
        <Link to='/login'>Войти</Link>
      </div>
    )
  }
}
