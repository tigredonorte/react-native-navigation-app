import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, ActivityIndicator } from 'react-native-paper';
import { Routes } from '~routes/routes';
import { theme } from '~styles/theme';
import { initStyle, loadFonts } from '~utils/style';

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