import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';

import HeaderNavbar from './headernavbarreducer';

const rootReducer = combineReducers({
  form,
  HeaderNavbar
});

export default rootReducer;