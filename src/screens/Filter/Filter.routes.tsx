
import { createStackNavigator } from '@react-navigation/stack';
import { LogoImage, LogoTitle } from '~components/Navigation';

import { FilterScreen } from './Filter.screen';

const { Navigator, Screen } = createStackNavigator();

export interface FilterRouteParameter {

}

export const FilterRouteData = {
  getRoutes: () : React.ReactElement => {
    return (
        <>
          <Screen
            name='Filter'
            component={FilterScreen}
            options={{
              headerLeft: () => <LogoImage />,
              headerTitle: () => <LogoTitle title="Filters.title"/>,
              // headerRight: () => <BackButton navigationBackRoute='Home'></BackButton>,
            }}
          />
        </>
    );
  } 
}
  