import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Text1 = () => {
  return <Text style={styles.textStyle}>Bem-Vindo ao meu APP!</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default Text1;
