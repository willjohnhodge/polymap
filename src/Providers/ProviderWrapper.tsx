import { FC, ReactNode } from 'react';

import { globalTheme as GlobalTheme } from '../Theme/Theme';

interface WrapperProps {
  children: ReactNode;
}

export const ProviderWrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <GlobalTheme />
      {children}
    </>
  );
};
