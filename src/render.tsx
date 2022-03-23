import {addPost, StateType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

export const rerenderTree = (state: StateType) => {
   ReactDOM.render(
      <BrowserRouter>
         <App state={state} addPost={addPost}/>
      </BrowserRouter>,
      document.getElementById('root')
   )
}