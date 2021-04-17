import React, { useState } from 'react';
import { mockCities } from '@mock/mock';
import TabItem from "@features/tab-item/tab-item";

const TabList = () => {
  const [activeCity, setActiveCity] = useState(mockCities[0]);

  const tabHandle = (name: string) => {
    setActiveCity(name);
  };
  
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {mockCities.map((mockItem) => (
            <li key={mockItem} className="locations__item">
              <TabItem
                name={mockItem}
                isActive={mockItem === activeCity}
                tabHandle={tabHandle}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TabList;