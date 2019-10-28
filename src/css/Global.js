import {StyleSheet} from 'react-native';

const color = {
  blue: '#77aaff',
  blue2: '#99ccff',
  blue3: '#bbeeff',
  blue4: '#5588ff',
  blue5: '#3366ff',
};

export const GlobalCSS = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: color.blue5,
  },
  headerTitle: {
    fontSize: 72,
  },
  button: {
    backgroundColor: color.blue5,
  },
  buttonAlt: {
    backgroundColor: color.blue3,
  },
  buttonLabel: {
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
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
