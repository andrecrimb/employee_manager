import  React, { Component } from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


// import { addNavigationHelpers } from 'react-navigation';
// import { connect } from 'react-redux';
// import { employeeUpdate } from './actions/NavigationAction';
// import Router2 from './Router2';



class App extends Component{

    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyBPYcmnOWmqKWYt_e_URuYlVzkWJeJP9jA',
            authDomain: 'manager-dde52.firebaseapp.com',
            databaseURL: 'https://manager-dde52.firebaseio.com',
            projectId: 'manager-dde52',
            storageBucket: '',
            messagingSenderId: '843494338223'
        };
        firebase.initializeApp(config);
    }

    render(){ // applymiddleware is how we wireup redux thunk
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); // the second argument is used when i want to pre populate user and email fields when the screen is render
        return (
        <Provider store={store}>
            <Router/>
            {/*<RootContainer*/}
                {/*navigation={addNavigationHelpers({*/}
                    {/*dispatch: this.props.dispatch,*/}
                    {/*state: this.props.navigation,*/}
                {/*})}*/}
            {/*/>*/}
        </Provider>
        );
    }
}

export  default App;

// const mapStateToProps = state => ({
//     navigation: state.navigation, // needed for addNavigationHelpers
// });
//
// export default connect(mapStateToProps)(App);