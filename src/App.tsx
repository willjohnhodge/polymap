import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ProviderWrapper } from './Providers/ProviderWrapper';
import { Main } from './Pages/Main';
import { About } from 'Pages/About';
import { Header } from 'Components/Header';
import { isMobileDevice } from '_Functions';

const App: FC = () => {
  const isMobile = isMobileDevice();

  return (
    <BrowserRouter basename='/'>
      <ProviderWrapper>
        <Header mobile={isMobile} />
        <Routes>
          <Route path="*" element={<Main mobile={isMobile} />} />
          <Route path="/about" element={<About />} />

          {/* If user tries invalid URL, redirect to '/' */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </ProviderWrapper>
    </BrowserRouter>
  );
};

export default App;
