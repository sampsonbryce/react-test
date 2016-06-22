import { createStore } from 'redux'
import reducer from './reducer.js'


//If you want middleware/logging add it here

export default function configureStore(initialState){
    return createStore(reducer, initialState);
}
