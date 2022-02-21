import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, ActivityIndicator } from 'react-native-paper';
import { enableScreens } from 'react-native-screens';
import { Routes } from '~routes/routes';
import { theme } from '~styles/theme';
import { initStyle, loadFonts } from '~utils/style';

/**
 * It's important on huge app to improve performance
 */
enableScreens();

export default function App() {

  const [ appLoaded ] = loadFonts();
  if (!appLoaded) {
    return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      </PaperProvider>
    );
  }
  initStyle();

  return (
    <PaperProvider theme={theme}>
      <Routes></Routes>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});