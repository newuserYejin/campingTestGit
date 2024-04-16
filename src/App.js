import './App.css';
import { Button } from '@mui/material';
import { Routes, Route } from 'react-router-dom'
import TestHomePage from './TestPages/TestHomePage';
import TestDetailPage from './TestPages/TestDetailPage';
import TestAppLayout from './TestAppLayout/TestAppLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<TestAppLayout />}>
          <Route index element={<TestHomePage />} />
          <Route path='/detail' element={<TestDetailPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
