import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./src/screens/home";
import EpisodeDetailPage from "./src/screens/episodeDetail";
import CharacterDetailPage from "./src/screens/characterDetail";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} options={{headerTitle:"Episodes",headerTitleAlign:"center"}}/>
        <Stack.Screen name="EpisodeDetail" component={EpisodeDetailPage} />
        <Stack.Screen name="CharacterDetail" component={CharacterDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}