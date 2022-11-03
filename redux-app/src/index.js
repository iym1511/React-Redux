import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 리덕스 프로바이더 추가
import {Provider} from "react-redux"
// store를 만들기위한 createStore 추가 : redux
// redux 툴킷을 이용하라는 의미의 줄
// applyMiddleware를 통해 미들웨어 추가 가능
import { applyMiddleware, createStore } from 'redux';
// store에 추가할 couner state와 action
import counter from './modules/counter';
// rootRdeucer를 통해 한번에 묶어서 사용가능
import rootReducer from './modules';

// 미들웨어를 작성 및 설치 후 추가
// import loggerMiddleware from './lib/loggerMiddleware';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//createStore/counter.js를 이용하여 store 생성 // rootReducer에 포함시켜서 한번에 사용
const store = createStore(rootReducer, applyMiddleware(logger,thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/** 앱안에서 사용하기위해 감싸줌 */}
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

