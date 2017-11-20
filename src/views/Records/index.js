import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table } from 'reactstrap';
import { getRecords } from '../../redux/selectors/records'
import { addRecord, deleteRecord } from '../../redux/actions/records'
import { RecordEntity } from '../../components/RecordsEntity'
import AddRecordForm from './AddRecord'
import { Header } from '../../components/Header'
import './index.css';

class Records extends Component {
  handleSubmit = values => {
    const { addRecord } = this.props
    addRecord(values)
    console.log('values', values)
  }

  render () {
    const { records, deleteRecord } = this.props
    return (
      <div className='juice-tracker-Records'>
        <Header />
        <AddRecordForm onSubmit={this.handleSubmit} />
        <div className='juice-tracker-records-list'>
          <Table className='juice-tracker-RecordsEntity' striped hover responsive>
            <thead>
              <tr>
                <th>Название</th>
                <th>Вкус</th>
                <th>СРЦ</th>
                <th>Цена</th>
              </tr>
            </thead>
            <tbody>
              {
                records.map(record => {
                  return (
                    <RecordEntity
                      key={record.id}
                      id={record.id}
                      recordEntity={record}
                      onDelete={deleteRecord}
                    />
                  )
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
const mapDispatchToProps = dispatch => ({
  addRecord (data) {return dispatch(addRecord(data))},
  deleteRecord (id) {return dispatch(deleteRecord(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Records)
