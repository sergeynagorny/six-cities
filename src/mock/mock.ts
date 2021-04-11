const MOCK_PLACES_COUNT = 10;

const placesNames = ['Beautiful & luxurious apartment at great location', 'Wood and stone place', 'Canal View Prinsengracht', 'Nice, cozy, warm big bed apartment', 'Wood and stone place']
const placesTypes = ['Apartment', 'Private room']
const placesImages = ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg']
const placesCities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf']

const getRandomValueFromArray = (array: string[]) => {
  return array[Math.floor(Math.random() * array.length)]
}

const getRandomInteger = (min: number, max: number) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getRandomBoolean = () => {
  return Boolean(getRandomInteger(0, 1));
}

const getMockPlacesCard = () => ({
  city: getRandomValueFromArray(placesCities),
  name: getRandomValueFromArray(placesNames),
  type: getRandomValueFromArray(placesTypes),
  image: getRandomValueFromArray(placesImages),
  price: getRandomInteger(100, 500),
  rating: getRandomInteger(0, 50) / 10,
  isFavorite: getRandomBoolean(),
  isPremium: getRandomBoolean(),
})

export const mockPlacesCards = Array.from({length: MOCK_PLACES_COUNT}, getMockPlacesCard);
export const mockPlacesCardsMap = new Map(mockPlacesCards.map((item, _, array) => [item.city, array.filter(arrayItem => arrayItem.city === item.city)]));

const getFavoritePlaces = (array: any[]) => (
  array
    .map(([city, places]) => [city, places.filter((place: any) => place.isFavorite)])
    .filter(([_, places]) => places.length)
)

export const mockFavoritePlaces = getFavoritePlaces(Array.from(mockPlacesCardsMap));
