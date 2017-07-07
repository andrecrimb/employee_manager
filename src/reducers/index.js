import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
//import NavigationReducer from './NavigationReducer';

export default combineReducers({
    auth: AuthReducer, //property state of reducer
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
   // navigationReducer: NavigationReducer,
});