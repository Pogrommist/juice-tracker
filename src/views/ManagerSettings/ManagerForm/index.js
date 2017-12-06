import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './index.css';

let ManagerForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className='juice-tracker-ManagerForm-form'>
      <div className='juice-tracker-ManagerForm-form-field'>
        <label htmlFor='firstName'>Имя</label>
        <Field
          name='firstName'
          component='input'
          type='text'
          placeholder='Имя'
        />
      </div>
      <div className='juice-tracker-ManagerForm-form-field'>
        <label htmlFor='lastName'>Фамилия</label>
        <Field
          name='lastName'
          component='input'
          type='text'
          placeholder='Фамилия'
        />
      </div>
      <div className='juice-tracker-ManagerForm-form-field'>
        <label htmlFor='email'>Email</label>
        <Field
          name='email'
          component='input'
          type='email'
          placeholder='Email'
        />
      </div>
      <div className='juice-tracker-ManagerForm-form-field'>
        <label htmlFor='password'>Пароль</label>
        <Field name='password' component='input' type='password' />
      </div>
      <div className='juice-tracker-ManagerForm-form-field'>
        <label htmlFor='passwordConfirmation'>Подтверждение пароля</label>
        <Field name='passwordConfirmation' component='input' type='password' />
      </div>
      <div className='juice-tracker-ManagerForm-form-button'>
        <button type='submit'>Сохранить</button>
      </div>
    </form>
  );
};

ManagerForm = reduxForm({
  form: 'ManagerForm'
})(ManagerForm);

export default ManagerForm;
