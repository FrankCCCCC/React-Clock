import {createStore} from 'redux';

import {time} from './reducer.js';

let store = createStore(time);
window.store = store;

export default store;