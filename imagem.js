import React from 'react';
import {View, Image} from 'react-native';

const Imagem1 = () => {
  return (
    <View>
        <Image 
            source={require('./src/imagem1.png')}
        />
    </View>
  );
};

export default Imagem1;
