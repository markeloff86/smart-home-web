import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainForm from './forms/MainForm'
import {Provider} from 'react-redux';
import {rootReducer} from './reducers'
import {createStore} from 'redux';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <MainForm/>
    </Provider>,
    document.getElementById('application')
);

