import React from 'react';
import { Field, reduxForm } from 'redux-form'
import './index.css';

const LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className='juice-tracker-LoginForm'>
      <Field
        name='email'
        placeholder='email'
        component='input'
        type='email'
        className='juice-tracker-formField'
      />
      <Field
        name='password'
        placeholder='Пароль'
        component='input'
        type='password'
        className='juice-tracker-formField'
      />
      <button type='submit' className='juice-tracker-login-btn'>Войти</button>
    </form>
  )
}

export default reduxForm({ form: 'LoginForm' })(LoginForm)
