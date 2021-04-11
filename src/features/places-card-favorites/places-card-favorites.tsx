import React from 'react';
import FavoriteButton from '../favorite-button/favorite-button';
import PlaceMark from '../place-mark/place-mark';
import Rating from '../rating/rating';

interface IPlaces {
  name: string;
  type: string;
  image: string;
  price: number;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
}

interface IPlacesCard {
  places: IPlaces;
}

const PlacesCardFavorites = (props: IPlacesCard) => {
  const { places } = props;
  const { name, type, image, price, rating, isPremium, isFavorite } = places;

  return (
    <article className="favorites__card place-card">
      {isPremium ? <PlaceMark className={"place-card"} /> : ``}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} alt={name} />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <FavoriteButton className={"place-card"} isActive={isFavorite} />
        </div>
        <Rating className={"place-card"} rating={rating} />
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default PlacesCardFavorites;