import {StyleSheet} from 'react-native';

export const GlobalCSS = StyleSheet.create({
  header: {},
  button: {},
  buttonLabel: {
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
  },
  Separator: {
    paddingVertical: 10,
  },
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
  footerTab: {
    backgroundColor: '#aec6cf',
    borderColor: '#7c929b',
    borderWidth: 1,
  },
  footerTabSelected: {
    backgroundColor: '#7c929b',
    borderColor: '#7c929b',
    borderWidth: 1,
  },
  footerTabLabel: {
    color: '#000000',
    fontSize: 15,
  },
});
