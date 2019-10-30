import {StyleSheet} from 'react-native';

/**
 * Stylesheet containing loading modal styles.
 * @type {{loadingModalContainer: object}}
 */
export const LoadingModalCss = StyleSheet.create({
  loadingModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.50)',
  },
});
