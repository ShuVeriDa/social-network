import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import { Provider } from "./StoreContext";
import store from "./redux/redux-store";

export const rerenderEntireTree = () => {
   ReactDOM.render(
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>,
      document.getElementById('root')
   )
}