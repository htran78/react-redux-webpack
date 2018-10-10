import { all } from 'redux-saga/effects'

import { todosSaga } from './sagaTodos'

export default function* sagaRoot() {
  yield all([
    ...todosSaga
  ])
};
