import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export class ManagerMenu extends Component {
  render () {
    return (
      <div className='juice-tracker-ManagerMenu'>
        <NavLink
          to='/ManagerSettings'
          className='juice-tracker-ManagerMenu-navlink'
        >
          Настройки
        </NavLink>
        <NavLink to='/login' className='juice-tracker-ManagerMenu-navlink'>
          Выйти
        </NavLink>
      </div>
    );
  }
}
