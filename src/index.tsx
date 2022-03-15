import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

export type PostsType = {
   id: number
   message: string
   likesCount: number
}

export type DialogsDataType = {
   id: number
   name: string
}

export type MessagesDataType = {
   id: number
   message: string
}

const posts: Array<PostsType> = [
   {id: 1, message: "Hi, how are you?", likesCount: 10},
   {id: 2, message: "It is my friend", likesCount: 13},
]

const dialogs: Array<DialogsDataType> = [
   {id: 1, name: "Ramzan"},
   {id: 2, name: "Billy"},
   {id: 3, name: "Islam"},
   {id: 4, name: "Abdurrahman"},
]

const messages: Array<MessagesDataType> = [
   {id: 1, message: 'Hi'},
   {id: 2, message: 'How are You?'},
   {id: 3, message: 'Mukha vu ho?'},
   {id: 4, message: 'Yo, whats up?'},
]

ReactDOM.render(
  <BrowserRouter>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
