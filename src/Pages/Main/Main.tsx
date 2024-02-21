import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../../Components/Header';
import { Platform } from './Platform';


export const Main: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<><Header /><Platform /></>} />
    </Routes>
  );
};
