import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { store } from './store';
import { Provider } from 'react-redux';
import Detail from './pages/Detail/Detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
      <Route path='/' element={<Home />}></Route> 
      </Route>
      <Route path='/detail/:detailId' element={<Detail />}></Route> 
    </Routes>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);

