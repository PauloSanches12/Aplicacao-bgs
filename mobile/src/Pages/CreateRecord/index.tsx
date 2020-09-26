import styles from './styles';
import api from '../../services/api';
import pickerSelectStyles from './styles'; //precisa inportar pro estilo do select funcionar
import { Game, GamePlatform } from './types';
import Header from '../../components/Header';
import React, { useEffect, useState } from 'react';
import PlatFormCard from './PlatFormCard/PlatFormCard';
import RNPickerSelect from 'react-native-picker-select';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { Alert, Text, TextInput, View } from 'react-native';

const placeholder = {
  label: "Selecione o Game",
  value: null
}

const mapSelectValues = (games: Game[]) => {
  return games.map(game => ({
    ...game,
    label: game.title,
    value: game.id
  }));
}

const CreateRecord: React.FC = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [platform, setPlatform] = useState<GamePlatform>();
  const [selectedGame, setSelectedGame] = useState('');
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);

  useEffect(() =>{
    api.get('games').then(response => {
      const selectValues = mapSelectValues(response.data);
      
      setAllGames(selectValues);
    })
    .catch(() => Alert.alert('Erro ao listar os jogos!'))
  }, []);
  
  function handleChangePlatform(selectedPlatform: GamePlatform) {
    setPlatform(selectedPlatform);

    const gamesByPlatform = allGames.filter(game => game.platform === selectedPlatform)
    setFilteredGames(gamesByPlatform);
  }

  function handleSubmit() {
    const payload = { name, age, gameId: selectedGame };

    api.post('records', payload).then(() => {
      Alert.alert('Dados salvos com sucesso!')
      setName('');
      setAge('');
      setSelectedGame('');
      setPlatform(undefined);
    })
    .catch(() => Alert.alert('Erro no cadastro dos dados!'))
  }


  return (
    <>
      <Header />
      <View style={styles.container}>
        <TextInput onChangeText={text => setName(text)} value={name} placeholder="Nome" placeholderTextColor="#9E9E9E" style={styles.inputText} />
        <TextInput onChangeText={text => setAge(text)} value={age} placeholder="Idade" maxLength={2} keyboardType="numeric" placeholderTextColor="#9E9E9E" style={styles.inputText} />

        <View style={styles.platformContainer}>
          <PlatFormCard activePlatform={platform} icon="laptop" onChange={handleChangePlatform} platform="PC" />
          <PlatFormCard activePlatform={platform} icon="xbox" onChange={handleChangePlatform} platform="XBOX" />
          <PlatFormCard activePlatform={platform} icon="playstation" onChange={handleChangePlatform} platform="PLAYSTATION" />
        </View>
        <RNPickerSelect value={selectedGame} useNativeAndroidPickerStyle={false} style={pickerSelectStyles} onValueChange={value => {
          setSelectedGame(value);
        }} placeholder={placeholder} Icon={() => {
          return <Icon name="chevron-down" color="#9E9E9E" size={16} style={{ marginTop: 7 }} />
        }} items={filteredGames} />

        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>SALVAR</Text>
          </RectButton>
        </View>
      </View>
    </>
  );
};

export default CreateRecord;
