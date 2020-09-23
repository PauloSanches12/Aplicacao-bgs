import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/logo.png')} />
      <Text style={styles.textLogo1}>Big Game</Text>
      <Text style={styles.textLogo2}>Survey</Text>
    </View>
  );
};

export default Header;
