import React from 'react';

interface IFavoriteButton {
  isActive: boolean;
  className: string;
}

const FavoriteButton = (props: IFavoriteButton) => {
  const { isActive, className } = props;
  const activeClass = isActive ? `${className}__bookmark-button--active` : ``;

  return (
    <button
      className={`button ${className}__bookmark-button ${activeClass}`}
      type="button"
    >
      <svg className="place-card__bookmark-icon bookmark-icon">
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">
        {isActive ? `In bookmarks` : `To bookmarks`}
      </span>
    </button>
  );
};

export default FavoriteButton;