import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Table } from 'reactstrap';
import { getRecords } from '../../redux/selectors/records'
import { RecordEntity } from '../../components/RecordsEntity'
import './index.css';

class Records extends Component {
  render () {
    const { records } = this.props
    return (
      <div className='juice-tracker-Records'>
        <div className='juice-tracker-header'>
          <Link to='/login' className='juice-tracker-navlink'>Войти</Link>
        </div>
        <div className='juice-tracker-records-list'>
          <Table className='juice-tracker-RecordsEntity' striped hover responsive>
            <thead>
              <tr>
                <th>Название</th>
                <th>Вкус</th>
                <th>СРЦ</th>
                <th>Цена</th>
                <th>Разница</th>
              </tr>
            </thead>
            <tbody>
              {
                records.map(record => {
                  return <RecordEntity key={record.id} recordEntity={record} />
                })
              }
            </tbody>
          </Table>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  records: getRecords(state)
})

export default connect(mapStateToProps, null)(Records)
