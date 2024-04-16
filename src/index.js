import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const root = ReactDOM.createRoot(document.getElementById('root'));

// 리액트 쿼리 쓰기전 필수 세팅
const queryClient = new QueryClient()
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);

// 'https://apis.data.go.kr/B551011/KorService1/locationBasedList1?radius=10000&MobileOS=WIN&MobileApp=so&_type=json&mapX=126.99416545556292&mapY=37.561318648527205&serviceKey=HYuPePscXWsXZj8LTa900BZgb%252F66OeqfpbjmL5mjoYqMmd2mZ55p1glzPRGOwRsWXISJeiRhKygjhqMiEIPQLw%253D%253D'

// 'https://apis.data.go.kr/B551011/KorService1/locationBasedList1?radius=10000&MobileOS=WIN&MobileApp=so&_type=json&serviceKey=undefined&mapX=126.99416545556292&mapY=37.561318648527205'
