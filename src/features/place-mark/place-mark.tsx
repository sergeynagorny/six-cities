import React from 'react';

interface IPlaceMark {
  className: string;
  mark?: string;
}

const PlaceMark = (props: IPlaceMark) => {
  const { className, mark = 'Premium' } = props;

  return (
    <div className={`${className}__mark`}>
      <span>{mark}</span>
    </div>
  );
};

export default PlaceMark;