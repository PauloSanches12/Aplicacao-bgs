import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import React from 'react';

const Header: React.FC = () => {

  const { goBack } = useNavigation();

  function handleOnPress() {
    goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.textLogo1}>Big Game</Text>
        <Text style={styles.textLogo2}>Survey</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Header;
