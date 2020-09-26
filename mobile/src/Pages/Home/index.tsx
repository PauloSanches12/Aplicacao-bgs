import { RectButton } from 'react-native-gesture-handler'; 
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import React from 'react';

const Home: React.FC = () => {

  const {navigate } = useNavigation();

  function handleOnPress() {
    navigate('CreateRecord');
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Image style={styles.gamerImage} source={require('../../assets/gamer.png')} />
        <Text style={styles.title}>Vote agora!</Text>
        <Text style={styles.subTitle}>Nos diga qual é seu jogo favorito!</Text>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleOnPress}>
          <Text style={styles.buttonText}>COLETAR DADOS</Text>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="chevron-right" color="#FFF" size={25} />
            </Text>
          </View>
        </RectButton>
      </View>
    </>
  );
};

export default Home;
