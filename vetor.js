import React from 'react';
import {Text, StyleSheet} from 'react-native';

const numeros = [1, 2, 3, 4, 5];

const Text3 = () => {
  return (
    <Text style={styles.textStyle}>
      {numeros.join(', ')}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default Text3;
