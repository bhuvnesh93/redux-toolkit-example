import { combineReducers } from 'redux';
import * as Person from './Person';

const rootReducer = combineReducers({ person: Person.personSliceReducer });

export { rootReducer, Person };
