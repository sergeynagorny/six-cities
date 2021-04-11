import React from 'react';

interface IRating {
  rating: number;
  className: string;
  isValueVisible?: boolean;
}

const getPercentByRating = (rating: number) => {
  return Math.floor((rating / 5) * 100) + "%";
};

const Rating = (props: IRating) => {
  const { className, rating, isValueVisible } = props;

  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{ width: getPercentByRating(rating) }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {isValueVisible ? (
        <span className="property__rating-value rating__value">{rating}</span>
      ) : (
        ``
      )}
    </div>
  );
};

export default Rating;