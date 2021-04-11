import React from 'react';

interface ITabItem {
  name: string;
  isActive?: boolean;
}

const TabItem = (props: ITabItem) => {
  const { name, isActive } = props;
  const activeClass = isActive ? `tabs__item--active` : '';

  return (
    <a className={`locations__item-link tabs__item ${activeClass}`} href="#">
      <span>{name}</span>
    </a>
  );
};

export default TabItem;