import React from 'react';

const RatingStars = [
  "terribly",
  "badly",
  "not bad",
  "good",
  "perfect",
]


const CommentsForm = () => {
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      
      <div className="reviews__rating-form form__rating">
        {RatingStars.map((rating, index) => (
          <div key={`${index}-stars`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={index}
              id={`${index}-stars`}
              type="radio"
            />
            <label
              htmlFor={`${index}-stars`}
              className="reviews__rating-label form__rating-label"
              title={rating}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </div>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={""}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{" "}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentsForm;