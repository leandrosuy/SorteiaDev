import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/inicio.png'),
      ultimo: null,

    };

    this.sortearAluno = this.sortearAluno.bind(this);

    this.frases = [
      'Leandro', 
      'Diego', 
      'Gabriel', 
      'Arhur',
      'Henrique',
      'Italo',
      'Wesley',
      'Jéssica',
      'Matheus',
      'Vitor',
      'Thiago',
      'Marcos',
      'Andry',
      'Cleisson',
      'Tayna'
    ]

  }

  sortearAluno(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      ultimo: this.state.textoFrase,
      textoFrase: ' " ' + this.frases[numeroAleatorio] + ' " ',
      img: require('./src/sorteado.png'),
    })
  }

  render(){
    return(
      <View style={styles.container}>

      <Image 
        source={this.state.img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={this.sortearAluno}>
        <View style={styles.btnQuebrar}>
          <Text style={styles.btnTexto}>Sortear</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.areaUltimo}>
        <Text style={styles.textoUltimo}> Último Sorteado: {this.state.ultimo}</Text>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 500,
    height: 350,
    marginBottom: -100
  },
  textoFrase: {
    fontSize: 50,
    color: '#0f7f0f',
    marginBottom: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width:230,
    height: 50,
    borderWidth: 2,
    borderColor: '#0f7f0f',
    borderRadius: 25
  },
  btnQuebrar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f7f0f'
  },
  areaUltimo: {
    marginTop: 40,
  },
  textoUltimo: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#0f7f0f'
  }
});

export default App;