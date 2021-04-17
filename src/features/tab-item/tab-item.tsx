import React from 'react';
import { Link } from 'react-router-dom';

interface ITabItem {
  name: string;
  isActive?: boolean;
  tabHandle?: (name: string) => void;
}

const TabItem = (props: ITabItem) => {
  const { name, isActive, tabHandle } = props;
  const activeClass = isActive ? `tabs__item--active` : '';

  const onTabClick = () => {
    if (tabHandle) {
      tabHandle(name);
    } 
  }

  return (
    <Link
      onClick={onTabClick}
      to={`/${name.toLowerCase()}`}
      className={`locations__item-link tabs__item ${activeClass}`}
    >
      <span>{name}</span>
    </Link>
  );
};

export default TabItem;