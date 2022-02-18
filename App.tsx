import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { initStyle, loadFonts } from './src/utils/style';

export default function App() {

  const [ appLoaded, setAppLoaded ] = useState(false);

  loadFonts().then(
    () => setAppLoaded(true), 
    () => setAppLoaded(true)
  );

  if (!appLoaded) {
    return <AppLoading />;
  }
  initStyle();

  return (
    <View style={styles.container}>
      <Text>olá mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
