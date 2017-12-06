import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ManagerMenu } from './ManagerMenu';
import './index.css';
import avatar from './img/Wutface.png';

export class Header extends Component {
  state = { managerMenu: false };

  handleAvatarClick = () => {
    const { managerMenu } = this.state;
    this.setState({ managerMenu: !managerMenu });
  };

  render () {
    const { managerMenu } = this.state;
    return (
      <div className='juice-tracker-header'>
        <div className='juice-tracker-header-links'>
          <NavLink
            to='/login'
            className='juice-tracker-navlink'
            activeClassName='is-selected'
          >
            Войти
          </NavLink>
          <NavLink
            to='/charts'
            className='juice-tracker-navlink'
            activeClassName='is-selected'
          >
            Графики
          </NavLink>
          <NavLink
            to='/records'
            className='juice-tracker-navlink'
            activeClassName='is-selected'
          >
            Записи
          </NavLink>
        </div>
        <img
          src={avatar}
          alt='Аватар'
          className='juice-tracker-header-avatar'
          onClick={this.handleAvatarClick}
        />
        {managerMenu ? <ManagerMenu /> : null}
      </div>
    );
  }
}
