import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Dev({ navigation }) {
	return (
		<View style={styles.container}>
			
			<View style={styles.contentBlock}>
			
			<TouchableOpacity onpress={() => navigation.navigate('Dev')} style={styles.button}>
					<Text style={styles.header}> 
					O TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS 
					</Text>
					<Text style={styles.buttonText}>
					{"\n"}
					é o profissional 
					que analisa e projeta sistemas. Constrói, documenta, 
					testes e mantém sistemas de informação. Utiliza ambientes de 
					desenvolvimento e linguagens de programação específica. 
					Modela, implementa e mantém bancos de dados.
					</Text>
			</TouchableOpacity>
			
			</View>
				
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	letterSpacing: '1.6px',
	textAlign: 'justify'
  },
  header: {
	fontWeight: 'bold',
  },
  contentBlock: {
	width: '75%'
  },
  italic: {
	fontStyle: 'italic'
  }
});