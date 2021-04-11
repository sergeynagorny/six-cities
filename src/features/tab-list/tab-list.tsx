import React from 'react';
import TabItem from './../tab-item/tab-item';

const mockCities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf']
const mockActiveItem = 'Cologne';

const TabList = () => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          
          {mockCities.map((mockItem) => 
            <li className="locations__item">
              <TabItem name={mockItem} isActive={mockItem === mockActiveItem} />
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};

export default TabList;