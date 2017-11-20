import React from 'react';
import { Field, reduxForm } from 'redux-form'
import './index.css';

const AddRecordForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className='juice-tracker-AddRecord'>
      <Field
        name='name'
        placeholder='Название'
        component='input'
        type='text'
        className='juice-tracker-AddRecord-formField'
      />
      <Field
        name='description'
        placeholder='Вкус'
        component='input'
        type='text'
        className='juice-tracker-AddRecord-formField'
      />
      <Field
        name='initialPrice'
        placeholder='СРЦ'
        component='input'
        type='text'
        className='juice-tracker-AddRecord-formField'
      />
      <Field
        name='price'
        placeholder='Цена'
        component='input'
        type='text'
        className='juice-tracker-AddRecord-formField'
      />
      <button type='submit' className='juice-tracker-AddRecord-btn'>Добавить</button>
    </form>
  )
}

export default reduxForm({ form: 'AddRecord' })(AddRecordForm)
