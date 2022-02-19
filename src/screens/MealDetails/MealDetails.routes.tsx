
import { createStackNavigator } from '@react-navigation/stack';
import { LogoImage, LogoTitle } from '~components/Navigation';

import { MealDetailsScreen } from './MealDetails.screen';

const { Navigator, Screen } = createStackNavigator();

export interface MealDetailsRouteParameter {

}

export const MealDetailsRouteData = {
  getRoutes: () : React.ReactElement => {
    return (
        <>
          <Screen
            name='MealDetails'
            component={MealDetailsScreen}
            options={{
              headerLeft: () => <LogoImage />,
              headerTitle: () => <LogoTitle title="MealDetails.title"/>,
              // headerRight: () => <BackButton navigationBackRoute='Home'></BackButton>,
            }}
          />
        </>
    );
  } 
}
  