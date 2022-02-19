import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Colors } from '~constants/colors';
import { Routes } from '~routes/routes';
import { initStyle, loadFonts } from '~utils/style';

export default function App() {

  const [ appLoaded ] = loadFonts();
  if (!appLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  initStyle();

  return (
    <Routes></Routes>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});