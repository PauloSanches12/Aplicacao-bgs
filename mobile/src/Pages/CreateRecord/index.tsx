import React from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const CreateRecord: React.FC = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>CreateRecord</Text>
      </View>
    </>
  );
};

export default CreateRecord;
