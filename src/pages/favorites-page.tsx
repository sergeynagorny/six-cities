import React from 'react';
import Header from './../features/header/header';
import Footer from './../features/footer/footer';
import PlacesCardFavorites from '../features/places-card-favorites/places-card-favorites';
import TabItem from './../features/tab-item/tab-item';
import {
  mockPlacesCards,
  mockPlacesCardsMap,
  mockFavoritePlaces,
} from "../mock/mock";

const FavoritesPage = () => {


  console.log(mockFavoritePlaces);

  // console.log(mockFavoritePlacesCards);
  // console.log(mockPlacesCardsMap);
  // console.log(Array.from(mockPlacesCardsMap));


  return (
    <>
      <div style={{ display: "none" }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
            />
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            />
          </symbol>
        </svg>
      </div>

      <div className="page">
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">

                {mockFavoritePlaces.map(([city, places]) => (
                  <li key={city} className="favorites__locations-items">

                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <TabItem name={city} />
                      </div>
                    </div>

                    <div className="favorites__places">
                      {places.map((place: any, i: number) => (
                        <PlacesCardFavorites key={i} places={place} />
                      ))}
                    </div>

                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FavoritesPage;