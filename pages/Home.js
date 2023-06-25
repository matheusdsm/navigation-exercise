import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
     	
		<TouchableOpacity  
			onPress={() => navigation.navigate('About')}
			style={[styles.botao, styles.shadowProp]}
		>
			<Text style={styles.buttonText}>Sobre</Text>  
		</TouchableOpacity>
		  
		<TouchableOpacity  
			onPress={() => navigation.navigate('Dev')}
			style={[styles.botao, styles.shadowProp]}
		>
			<Text style={styles.buttonText} >Desenvolvimento de Sistemas</Text>  
		</TouchableOpacity>
		  
		<TouchableOpacity  
			onPress={() => navigation.navigate('Adm')}
			style={[styles.botao, styles.shadowProp]}
		>
			<Text style={styles.buttonText} >Administração</Text>  
		</TouchableOpacity>
		
		  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botao: {
	backgroundColor: '#24a0ed',
	padding: 20,
	width: '80%',
	marginLeft: '10%',
	marginTop: 20
  },
  buttonText: {
	fontSize: 20,
	color: '#FFF'
  },
  shadowProp: {
		shadowColor: "#000",
		shadowOffset: {
		width: 0,
		height: 2,
	},
	shadowOpacity: 0.23,
	shadowRadius: 2.62,

	elevation: 4, 
  }
});