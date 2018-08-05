import React, { Component } from 'react'
import { Button } from 'reactstrap';
import './index.css'

export class RecordEntity extends Component {
  handleDeleteRecord = () => {
    const { id, onDelete, getProducts } = this.props
    if (window.confirm('Вы действительно хотите удалить запись?')) {
      onDelete(id)
    }
  }

  render () {
    const { recordEntity } = this.props
    const { name, flavor, initial_price, full_price } = recordEntity
    return (
      <tr className='juice-tracker-RecordsEntity-item'>
        <td>{name}</td>
        <td>{flavor}</td>
        <td>{initial_price}</td>
        <td>{full_price}</td>
        <td>
          <Button
            className='juice-tracker-RecordsEntity-btn'
            onClick={this.handleDeleteRecord}
          >x
          </Button>
        </td>
      </tr>
    )
  }
}
