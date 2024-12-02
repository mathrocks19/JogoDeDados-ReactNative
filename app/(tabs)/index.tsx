import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

//tentativas
const gerarDado = (): 1 | 2 | 3 | 4 | 5 | 6 => {
  return Math.floor(Math.random() * 6) + 1 as 1 | 2 | 3 | 4 | 5 | 6; 
};

const App = () => {
  const [dadoJogador1, setDadoJogador1] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [dadoJogador2, setDadoJogador2] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [vencedor, setVencedor] = useState<string>(''); //Decidi o vencedor 😎

  // Mapeamento das imagens dos dados
  const dadosImagens: { [key in 1 | 2 | 3 | 4 | 5 | 6]: any } = {
    1: require('../../assets/images/dice1.png'),
    2: require('../../assets/images/dice2.png'),
    3: require('../../assets/images/dice3.png'),
    4: require('../../assets/images/dice4.png'),
    5: require('../../assets/images/dice5.png'),
    6: require('../../assets/images/dice6.png'),
  };

  // Função do botão "Jogar os Dados"
  const jogarDados = () => {
    const dado1 = gerarDado();
    const dado2 = gerarDado();
    setDadoJogador1(dado1);
    setDadoJogador2(dado2);

    if (dado1 > dado2) {
      setVencedor('Jogador 1');
    } else if (dado2 > dado1) {
      setVencedor('Jogador 2');
    } else {
      setVencedor('Empate');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/wallpaper.jpg')}  
      style={styles.container}
    >
      <Text style={styles.title}>Jogo de Dados</Text>

      <Text style={styles.subTitle}>Vencedor 😎: {vencedor}</Text>

      <View style={styles.dadosContainer}>
        <Image source={dadosImagens[dadoJogador1]} style={styles.dado} />
        <Image source={dadosImagens[dadoJogador2]} style={styles.dado} />
      </View>

      
      <TouchableOpacity 
        style={styles.jogarButton} 
        activeOpacity={0.6} // Efeito do botao
        onPress={jogarDados}
      >
        <Text style={styles.buttonText}>Jogar os Dados</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50, 
    fontWeight: '900', 
    color: 'white',
  },
  subTitle: {
    fontSize: 20,
    marginVertical: 20,
    color: 'white',
  },
  dadosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
  dado: {
    width: 100,
    height: 100,
  },
  jogarButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: 'rgba(34, 193, 34, 0.7)', 
    borderRadius: 30,
    borderWidth: 4,
    borderColor: 'rgba(34, 193, 34, 0.7)',
    marginTop: 30,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
