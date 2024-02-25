import { FC, useState } from 'react';
import { CloseButton, SidebarContainer, SidebarContent, SidebarHeader } from './Sidebar.styles';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type HeaderProps = {
  mobile: boolean;
};

export const Sidebar: FC<HeaderProps> = ({ mobile }) => {
  const [isMinimised, setIsMinimised] = useState<boolean>(false);

  const handleMinimiseClick = () => {
    setIsMinimised(!isMinimised);
  }

  return (
    <SidebarContainer $minimised={isMinimised} $mobile={mobile}>
      <SidebarHeader onClick={handleMinimiseClick}>
        Menu
        <CloseButton>
          {isMinimised ? <ArrowDropDownIcon /> : < ArrowDropUpIcon />}
        </CloseButton>
      </SidebarHeader>
      {!isMinimised && <SidebarContent>
        <i>Functionality coming soon</i>
      </SidebarContent>}
    </SidebarContainer>
  );
};
