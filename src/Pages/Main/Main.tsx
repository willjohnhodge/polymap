import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../../Components/Header';
import { Platform } from '../Platform';
import { MainContainer } from './Main.styles';
import { isMobileDevice } from '_Functions';


export const Main: FC = () => {
  const isMobile = isMobileDevice();
  return (
    <Routes>
      <Route path='/' element={
        <MainContainer>
          <Header mobile={isMobile}/>
          <Platform mobile={isMobile}/>
        </MainContainer>
      } />
    </Routes>
  )
};
