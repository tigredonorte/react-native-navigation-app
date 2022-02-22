import { StyleSheet } from 'react-native';
import { theme } from '~styles/theme';

export const styles = StyleSheet.create({
  AndroidSafeArea: {
    backgroundColor: theme.colors.primary,
    paddingTop: 10
  },
  avatar: {
    borderColor: theme.colors.white,
    borderRadius: 60,
    borderWidth: 1,
    height: 60,
    width: 60,
  },
  drawerItem: {
    borderRadius: 0,
    height: 48,
    marginHorizontal: 0,
    marginVertical: 0,
    paddingHorizontal: 0,
  },
  drawerItemLabel: {
    fontSize: 16,
  },
  email: {
    color: theme.colors.white,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: 20,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 22,
    paddingVertical: 20,
  },
  userName: {
    color: theme.colors.white,
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 24,
  },
  viewAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  viewInfos: {
    flex: 1,
    justifyContent: 'center',
  },
});
