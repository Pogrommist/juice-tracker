import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.css'

export class Header extends Component {
  render () {
    return (
      <div className='juice-tracker-header'>
        <NavLink to='/login' className='juice-tracker-navlink' activeClassName='is-selected'>Войти</NavLink>
        <NavLink to='/charts' className='juice-tracker-navlink' activeClassName='is-selected'>Графики</NavLink>
        <NavLink to='/records' className='juice-tracker-navlink' activeClassName='is-selected'>Записи</NavLink>
      </div>
    )
  }
}
