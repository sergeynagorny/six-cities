import React, { useEffect, useState, FC } from "react";
import { useHistory } from 'react-router-dom';

const SortSearchTypes = {
  POPULAR: "popular",
  TO_HIGH: "to-high",
  TO_LOW: "to-low",
  TOP_RATED: "top-rated",
};

const sortOptions = [
  {
    name: "Popular",
    value: SortSearchTypes.POPULAR,
  },
  {
    name: "Price: low to high",
    value: SortSearchTypes.TO_HIGH,
  },
  {
    name: "Price: high to low",
    value: SortSearchTypes.TO_LOW,
  },
  {
    name: "Top rated first",
    value: SortSearchTypes.TOP_RATED,
  },
];

const sortOptionsMap = new Map(sortOptions.map((item) => [item.value, item]));

const PlacesSort: FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [sortType, setSortType] = useState(SortSearchTypes.POPULAR);

  const history = useHistory();
  const locationSearch = history.location.search;
  const optionsOpenedClass = isOpened ? 'places__options--opened' : '';

  useEffect(() => {
    var searchParams = new URLSearchParams(locationSearch);
    const params = searchParams.get("sort");

    if (params) {
      setSortType(params);
    }
  }, []);

  const onOpenButtonClick = () => {
    setIsOpened((prev) => !prev)
  }

  const onOptionClick = (value: string) => {
    setSortType(value);
    setIsOpened(false);

    history.push({ search: `sort=${value}` });
  };

  return (
    <>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          onClick={onOpenButtonClick}
          className="places__sorting-type"
          tabIndex={0}
        >
          {sortOptionsMap.get(sortType)?.name}
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul
          className={`places__options places__options--custom ${optionsOpenedClass}`}
        >
          {sortOptions.map(({ name, value }) => (
            <li
              key={`list-option-${value}`}
              onClick={() => onOptionClick(value)}
              className={`places__option ${
                sortType === value ? "places__option--active" : ""
              }`}
              tabIndex={0}
            >
              {name}
            </li>
          ))}
        </ul>
        <select
          defaultValue={sortType}
          className="places__sorting-type visually-hidden"
          id="places-sorting"
        >
          {sortOptions.map(({ name, value }) => (
            <option
              key={`form-option-${value}`}
              className="places__option"
              value={value}
            >
              {name}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default PlacesSort;

function userRef() {
  throw new Error('Function not implemented.');
}
