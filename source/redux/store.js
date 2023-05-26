import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import reducer from './combinedReducer';

const store = configureStore( {
    reducer,
    middleware: [ logger ],
})

export default store;
