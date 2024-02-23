import { FC, useState } from 'react';
import { CloseButton, SidebarContainer, SidebarContent, SidebarHeader, StyledImg } from './Sidebar.styles';
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
            <SidebarHeader>
                Menu
                <CloseButton onClick={handleMinimiseClick}>
                    {isMinimised ? <ArrowDropDownIcon /> : < ArrowDropUpIcon />}
                </CloseButton>
            </SidebarHeader>
            {!isMinimised && <SidebarContent>
                <StyledImg src="https://media0.giphy.com/media/tlGD7PDy1w8fK/giphy.gif" alt="Office gif" />
            </SidebarContent>}
        </SidebarContainer>
    );
};
