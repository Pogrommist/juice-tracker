import { values } from 'lodash'

export const getRecords = state => values(state.records)
