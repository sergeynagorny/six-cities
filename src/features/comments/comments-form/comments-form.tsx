import React from 'react';

const commentsRating = [
  {
    name: "perfect",
    count: 5,
  },
  {
    name: "good",
    count: 4,
  },
  {
    name: "not bad",
    count: 3,
  },
  {
    name: "badly",
    count: 2,
  },
  {
    name: "terribly",
    count: 1,
  }
];

const CommentsForm = () => {
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <div className="reviews__rating-form form__rating">
        {commentsRating.map(({ name, count }, index) => (
          <>
            <input
              key={`rating-input-${count}`}
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={count}
              id={`${count}-star`}
              type="radio"
            />
            <label
              key={`rating-label-${count}`}
              htmlFor={`${count}-star`}
              className="reviews__rating-label form__rating-label"
              title={name}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </>
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