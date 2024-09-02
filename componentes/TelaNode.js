import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

// Importa a imagem
import nodeImg from '../assets/node.png';

// Define o estilo
const estilo = StyleSheet.create({
  fundoNode: {
    flex: 1,
    backgroundColor: 'green',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default function TelaNode() {
  return (
    <View style={estilo.fundoNode}>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Node.js</Text>
        
        <Image source={nodeImg} style={estilo.logo} />
        
        <Text style={estilo.texto}>
          Node.js é uma ferramenta que permite rodar JavaScript no servidor. Com isso você poderá criar o seu Back-end utilizando a linguagem JavaScript.
        </Text>
      </View>
    </View>
  );
};
