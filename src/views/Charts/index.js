import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { pick } from 'lodash';
import { Header } from '../../components/Header';
import './index.css';

class Charts extends Component {
  // TODO: prevent duplicating products entities when changing route, fix empty store issue
  render () {
    const { records } = this.props;
    const data = records.map(item =>
      pick(item, 'name', 'initial_price', 'full_price'));
    return (
      <div>
        <Header />
        <LineChart
          width={800}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <Line type='monotone' dataKey='price' stroke='#8884d8' />
          <Line type='monotone' dataKey='initial_price' stroke='#222222' />
          <CartesianGrid stroke='#ccc' />
          <XAxis dataKey='name' />
          <YAxis />
        </LineChart>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  records: state.records
});

export default connect(mapStateToProps, null)(Charts);
