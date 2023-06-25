import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function About() {
		
  return (
    <View style={styles.container}>
		  
		<View style={styles.contentBlock}>
		  
     		<Text style={styles.header}>ETEC de Itanhaém</Text>
		
	    	<Text>
			{"\n"}
			A ETEC de Itanhaém 
			iniciou suas atividades em <Text style={styles.italic}>01/08/2006</Text>, 
			como Classe Descentralizada da ETEC “Adolpho Berezin” de Mongaguá, 
			através de um convênio do Governo do Estado de São Paulo com a atual 
			administração da Prefeitura Municipal de Itanhaém.
			</Text>  
	
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