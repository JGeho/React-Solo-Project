import reducer from "./reducers/appreducer";
import {Provider} from 'react-redux'
import { createStore } from "redux";
import App from './App';
import {render} from 'react-dom';

const bookStore = createStore(reducer);

render (
  <Provider store = {bookStore}>
    <App/>
  </Provider>, document.getElementById('root')
)