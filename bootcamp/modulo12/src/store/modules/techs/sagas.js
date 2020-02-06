import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { getTechsSuccess, getTechsFailure } from './actions';

export function* getTechs() {
     try {
         const response  = yield call(api.get, 'techs');

         yield put(getTechsSuccess(response.data));
     } catch ( err ){
         yield put(getTechsFailure());
     }
} 
 
