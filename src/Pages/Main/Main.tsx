import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../../Components/Header';
import { Platform } from '../Platform';
import { MainContainer } from './Main.styles';


export const Main: FC = () => (
  <Routes>
    <Route path='/' element={
      <MainContainer>
        <Header />
        <Platform />
      </MainContainer>
    } />
  </Routes>
);
