import { FC, useState } from 'react';
import { CloseButton, SidebarContainer, SidebarHeader } from './Sidebar.styles';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Sidebar: FC = () => {
    const [isMinimised, setIsMinimised] = useState<boolean>(false);

    const handleMinimiseClick = () => {
        setIsMinimised(!isMinimised);
    }

    return (
        <SidebarContainer $minimised={isMinimised}>

            <SidebarHeader>
                Menu
                <CloseButton onClick={handleMinimiseClick}>
                    {isMinimised ? <ArrowDropDownIcon /> : < ArrowDropUpIcon />}
                </CloseButton>
            </SidebarHeader>
        </SidebarContainer>
    );
};
