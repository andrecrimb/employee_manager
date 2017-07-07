import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';


export const LoginFormNav = StackNavigator({
    LoginForm:{
        screen: LoginForm,
        navigationOptions:{
            title: 'Please Login',
        }
    },
    EmployeeList:{
        screen: EmployeeList,
        navigationOptions: {
            title: 'Employee List'
        }
    }
});

export const RootRouter = StackNavigator({
    LoginFormNav: {
        screen: LoginFormNav
    },
}, {
    mode: 'modal',
    headerMode: 'none',
});

