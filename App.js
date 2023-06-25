//navigation-exercise; licensed under MIT license. brought by matheusdsm/justonedev.

import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './pages/About.js';
import Dev from './pages/Dev.js';
import Home from './pages/Home.js';
import Adm from './pages/Adm.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
	  <NavigationContainer screenOptions={{backgroundColor: '#000'}}>
		  
		  
		  <Stack.Navigator screenOptions={{
        	headerStyle: {
          	backgroundColor: '#f4511e',
        },
        	headerTintColor: '#fff',
        	headerTitleStyle: {
          	fontWeight: 'thin',
        },
      }}
		 >
			 
			  <Stack.Screen name="Home" component={Home} options={{ title: 'Início' }}/>
			  <Stack.Screen name="Adm" component={Adm} options={{ title: 'Administração' }}/>
		      <Stack.Screen name="Dev" component={Dev} options={{ title: 'Desenvolvimento de Sistemas'}}/>
			  <Stack.Screen name="About" component={About} options={{ title: 'Sobre' }}/>
			  
		  </Stack.Navigator>
		  
	  </NavigationContainer>
  );
}

export default App;


