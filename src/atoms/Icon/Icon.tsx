import { FC } from 'react';
import { Home } from './SVG/Home';
import { Search } from './SVG/Search';
import { Bell } from './SVG/Bell';
import { Profile } from './SVG/Profile';
import { Cross } from './SVG/Cross';
import { Bookings } from './SVG/Bookings';
import { Location } from './SVG/Location';

export const iconMap = {
  Home,
  Search,
  Bell,
  Profile,
  Cross,
  Bookings,
  Location,
};

export type IconName = keyof typeof iconMap;

export type IconProps = {
  name: IconName;
  containerProps?: string;
  iconProps?: string;
};

const fallback = () => <></>;

export const Icon: FC<IconProps> = ({ name, containerProps, iconProps, ...props }) => {
  const Component = iconMap[name] ?? fallback;

  return (
      <div className={`flex items-center justify-center ${containerProps}`} {...props}>
        <Component className={iconProps} />
      </div>
  );
};
