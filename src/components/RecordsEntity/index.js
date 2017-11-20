import React, { Component } from 'react'
import './index.css'

export class RecordEntity extends Component {
  render () {
    const { recordEntity } = this.props
    const { name, description, initialPrice, price, priceDifference } = recordEntity
    return (
      <tr className='juice-tracker-RecordsEntity-item'>
        <td>{name}</td>
        <td>{description}</td>
        <td>{initialPrice}</td>
        <td>{price}</td>
        <td>{priceDifference}</td>
      </tr>
    )
  }
}
