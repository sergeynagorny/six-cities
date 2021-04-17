import MainPage from './main/page';
import FavoritesPage from './favorites/page';
import LoginPage from './login/page';
import PropertyPage from './property/page';

import { RoutePath } from '../const';

export const routes = [
  {
    path: RoutePath.HOME,
    exact: true,
    component: MainPage,
  },
  {
    path: RoutePath.OFFERS,
    exact: true,
    component: PropertyPage,
  },
  {
    path: RoutePath.FAVORITES,
    exact: true,
    component: FavoritesPage,
    guard: {
      isAuthenticated: false,
      redirect: RoutePath.LOGIN,
    }
  },
  {
    path: RoutePath.LOGIN,
    exact: true,
    component: LoginPage,
    guard: {
      isAuthenticated: true,
      redirect: RoutePath.HOME,
    }
  },
]
