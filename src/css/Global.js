import {StyleSheet} from 'react-native';

const GlobalCSS = StyleSheet.create({
  formRow: {
    paddingBottom: 10,
  },
  formLabel: {
    fontSize: 18,
    paddingBottom: 10,
  },
  formInput: {
    borderWidth: 2,
    borderColor: 'lightgrey',
    height: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.50)',
  },
});

export default GlobalCSS;
