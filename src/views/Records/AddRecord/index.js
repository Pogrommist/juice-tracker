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
        name='flavor'
        placeholder='Вкус'
        component='input'
        type='text'
        className='juice-tracker-AddRecord-formField'
      />
      <Field
        name='initial_price'
        placeholder='СРЦ'
        component='input'
        type='text'
        className='juice-tracker-AddRecord-formField'
      />
      <Field
        name='full_price'
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
