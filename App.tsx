import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from 'react-native';
import { i18n } from '~i18n';
import { initStyle, loadFonts } from '~utils/style';

export default function App() {

  const [ appLoaded ] = loadFonts();
  if (!appLoaded) {
    return <AppLoading />;
  }
  initStyle();

  return (
    <View style={styles.container}>
      <Text>{i18n.t('HelloWorld')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
