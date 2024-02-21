import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../../Components/Header';


export const Main: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />} />
    </Routes>
  );
};
