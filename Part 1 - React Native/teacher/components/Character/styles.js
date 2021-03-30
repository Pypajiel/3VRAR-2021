import { StyleSheet } from 'react-native';

import Layout from './../../constants/Layout';
import Colors from './../../constants/Colors';

const availableCharSize = Layout.window.width * 0.15;
const charSize = availableCharSize > 100 ? 100: availableCharSize;

export default StyleSheet.create({
  characterImg: {
    position: "absolute",
    transform: [
      {translateX: -charSize/2 },
      {translateY: -charSize/2 },
      ],
    width: charSize,
    height: charSize,
    resizeMode: "contain"
  },
  characterHighlight: {
    marginTop: 5,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5
  }
});