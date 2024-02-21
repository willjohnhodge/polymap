import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ProviderWrapper } from './Providers/ProviderWrapper';
import { Main } from './Pages/Main';

const App: FC = () => {
  return (
    <BrowserRouter basename='/'>
      <ProviderWrapper>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </ProviderWrapper>
    </BrowserRouter>
  );
};

export default App;
