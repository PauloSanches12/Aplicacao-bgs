import React from 'react';
import Home from './Pages/Home';
import CreateRecord from './Pages/CreateRecord';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { Container } from './styles';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "#0B1F34"} }}> 
                <Screen name="Home" component={Home} />
                <Screen name="CreateRecord" component={CreateRecord} />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;