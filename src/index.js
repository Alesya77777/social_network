import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 25 },
  { id: 2, message: "It's my first post", likesCount: 30 },
  { id: 3, message: "It's my second post", likesCount: 35 },
];

const dialogs = [
  { id: 1, name: "Andrew" },
  { id: 2, name: "Dmitry" },
  { id: 3, name: "Sasha" },
  { id: 4, name: "Sveta" },
  { id: 5, name: "Valera" },
  { id: 6, name: "Viktor" },
];

const messages = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Hi!" },
  { id: 3, message: "How are you?" },
  { id: 4, message: "I'm fine, thanks. And you?" },
];

ReactDOM.render(
  <React.StrictMode>
    <App item={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
