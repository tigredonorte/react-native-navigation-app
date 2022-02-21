
import { createStackNavigator } from '@react-navigation/stack';
import { LogoImage, LogoTitle } from '~components/Navigation';

import { FavoritesScreen } from './Favorites.screen';

const { Navigator, Screen } = createStackNavigator();

export type FavoritesRouteParameter = { };

export const FavoritesRouteData = {
  getRoutes: () : React.ReactElement => {
    return (
        <>
          
        </>
    );
  } 
}
  