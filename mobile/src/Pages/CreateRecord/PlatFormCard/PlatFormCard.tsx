import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { GamePlatform } from '../types';
import { Text } from 'react-native';
import styles from './styles';
import React from 'react';

interface Props {
    platform: GamePlatform;
    onChange: (platform: GamePlatform) => void;
    icon: string;
    activePlatform?: GamePlatform;
}

const PlatFormCard: React.FC<Props> = ({ platform, onChange, icon, activePlatform }) => {

  const isActive = platform ===activePlatform;
  const backgroundColor = isActive ? '#ED7947' : '#FFF';
  const textColor = isActive ? '#FFF' : '#9E9E9E';

  return (
    <RectButton 
      onPress={() => onChange(platform)} 
      style={[styles.platformCard, { backgroundColor }]}>
        
        <Icon name={icon} size={60} color={textColor} />

        <Text style={[styles.platformCardText, { color: textColor }]}>
          {platform === 'PLAYSTATION' ? 'PS' : platform}
        </Text>
    </RectButton>
  );
}

export default PlatFormCard;