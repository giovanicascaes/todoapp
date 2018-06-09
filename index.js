import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {createStore} from 'redux';
import {reducer as todoReducer} from './todoReducer';

const store = createStore(todoReducer);

const AppProvider = () =>
    <Provider store={store}>
        <App/>
    </Provider>;

AppRegistry.registerComponent('ToDo', () => AppProvider);
