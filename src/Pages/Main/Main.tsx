import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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

      {/* If user tries invalid URL, redirect to '/' */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  )
};
