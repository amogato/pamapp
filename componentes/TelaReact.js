import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

// Importa a imagem
import react from '../assets/react.png';


// Define o estilo
const estilo = StyleSheet.create({
  fundoNode: {
    flex: 1,
    backgroundColor: 'cyan', // Cor de fundo leve para contrastar com o conteúdo
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Adiciona padding ao redor do conteúdo
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Espaçamento abaixo do título
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20, // Espaçamento abaixo da imagem
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20, // Adiciona padding horizontal ao texto
  },
});

export default function TelaReact() {
  return (
    <View style={estilo.fundoNode}>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>react.js</Text>
        
        <Image source={react} style={estilo.logo} />
        
        <Text style={estilo.texto}>
          Node.js é uma ferramenta que permite rodar JavaScript no servidor. Com isso você poderá criar o seu Back-end utilizando a linguagem JavaScript.
        </Text>
      </View>
    </View>
  );
};
