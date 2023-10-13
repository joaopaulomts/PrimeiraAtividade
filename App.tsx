import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Text1 from './src/text1';
import Text2 from './src/text2';
import Text3 from './src/vetor';
import Imagem1 from './src/imagem';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text1 />
      <Text2 />
      <Text3 />
      <Imagem1 />
    </SafeAreaView>
  );
}

export default App;
