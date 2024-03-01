import { FC, useState } from 'react';
import { CloseButton, SidebarContainer, SidebarContent, SidebarHeader } from './Sidebar.styles';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FeatureCollection, Geometry, GeometryCollection, Properties } from '@turf/turf';

type HeaderProps = {
  mobile: boolean;
  features: FeatureCollection<Geometry | GeometryCollection, Properties>;
};

export const Sidebar: FC<HeaderProps> = ({ mobile, features }) => {
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
        Polygons:
        {features.features.map((feature, index) => <div key={index}>{`Shape ${index + 1}: ` + `${feature.id}`.slice(0, 5)}</div>)}
      </SidebarContent>}
    </SidebarContainer>
  );
};
