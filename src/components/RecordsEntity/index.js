import React, { Component } from 'react'
import { Button } from 'reactstrap';
import './index.css'

export class RecordEntity extends Component {
  handleDeleteRecord = () => {
    const { id, onDelete } = this.props
    onDelete(id)
  }

  render () {
    const { recordEntity } = this.props
    const { name, description, initialPrice, price } = recordEntity
    return (
      <tr className='juice-tracker-RecordsEntity-item'>
        <td>{name}</td>
        <td>{description}</td>
        <td>{initialPrice}</td>
        <td>{price}</td>
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
