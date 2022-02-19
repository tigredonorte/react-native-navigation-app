
import { createStackNavigator } from '@react-navigation/stack';
import { LogoImage, LogoTitle } from '~components/Navigation';

import { FavoritesScreen } from './Favorites.screen';

const { Navigator, Screen } = createStackNavigator();

export interface FavoritesRouteParameter {

}

export const FavoritesRouteData = {
  getRoutes: () : React.ReactElement => {
    return (
        <>
          <Screen
            name='Favorites'
            component={FavoritesScreen}
            options={{
              headerLeft: () => <LogoImage />,
              headerTitle: () => <LogoTitle title="Favorites.title"/>,
              // headerRight: () => <BackButton navigationBackRoute='Home'></BackButton>,
            }}
          />
        </>
    );
  } 
}
  