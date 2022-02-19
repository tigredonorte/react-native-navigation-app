import { StackNavigationOptions } from '@react-navigation/stack';
import { Colors } from '~constants/colors';

export const screenOptionsDefault: StackNavigationOptions = {
    headerShadowVisible: true,
    headerBackTitleVisible: false,
    headerTintColor: Colors.medium_grey,
    cardStyle: { 
        backgroundColor: Colors.transparent 
    },
    headerStyle: {
      backgroundColor: Colors.white,
    },
    headerTitleStyle: {
      fontSize: 18,
      color: Colors.dark_grey,
    },
    // headerLeft: () => BackButton(),
  };