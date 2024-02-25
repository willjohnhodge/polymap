import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Platform } from '../Platform';
import { MainContainer } from './Main.styles';

type MainProps = {
  mobile: boolean;
}
export const Main: FC<MainProps> = ({ mobile }) => {
  return (
    <Routes>

      <Route path='/' element={
        <MainContainer>
          <Platform mobile={mobile} />
        </MainContainer>
      } />
    </Routes>
  )
};
