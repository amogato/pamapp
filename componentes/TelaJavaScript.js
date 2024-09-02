import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importa a imagem
import javascriptImg from '../assets/javascript.png';

// Define o estilo
const estilo = StyleSheet.create({
  fundoJS: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  boxBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default function TelaJavaScript() {
  const navigation = useNavigation();

  return (
    <View style={estilo.fundoJS}>
      <View style={estilo.container}>
        <Image source={javascriptImg} style={estilo.logo} />

        <Text style={estilo.titulo}>JavaScript</Text>

        <Text style={estilo.texto}>
          Veja 2 tecnologias para se tornar um programador fullstack web JavaScript.
        </Text>

        <View style={estilo.boxBotoes}>
          <Button 
            title="Front-end" 
            onPress={() => navigation.navigate('React')} 
          />
          
          <Button 
            title="Back-end" 
            onPress={() => navigation.navigate('Java Node')} 
          />
        </View>
      </View>
    </View>
  );
};
