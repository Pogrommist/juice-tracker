import React, { Component } from 'react';
import { Header } from '../../components/Header';
import ManagerForm from './ManagerForm';
import './index.css';
import avatar from './img/avatar.png';

export default class ManagerSettings extends Component {
  handleSubmit = values => {
    console.log('values', values);
  };

  render () {
    return (
      <div>
        <Header />
        <div className='juice-tracker-ManagerSettings'>
          <div className='juice-tracker-ManagerSettings-avatar'>
            <img src={avatar} alt='Аватар' />
          </div>
          <div className='juice-tracker-ManagerSettings-form'>
            <ManagerForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}
