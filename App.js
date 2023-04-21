
import React, { Component} from 'react'
import { View , Text, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
  
class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        numero: 0,
        botao: "VAI",
        ultimoNumero: null
      }
      //variavel do timer do relogio
      this.timer = null;
    }
  render(){
    return(
      <View style={styles.container}>

        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
          // style={{width: 200, height: 100}} 
        />

      <Text style={styles.timer}> { this.state.numero.toFixed(1) } </Text>

      <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn}
            onPress={()=>{

              if(this.timer != null){

                //Aqui vai parar o timer
                clearInterval(this.timer)
                this.timer = null

                this.setState({botao: "VAI"})
              } else {

                //começa girar o time
                this.timer = setInterval(()=>{
                this.setState({numero: this.state.numero + 0.1})
                }, 100)

                this.setState({botao: "PARAR"})
              }
              
            }}
          >
          <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}
             onPress={()=>{
                if(this.timer != null){
                  clearInterval(this.timer)
                  this.timer = null
                }
                this.setState({
                  ultimoNumero: this.state. numero.toFixed(1),
                  numero: 0,
                  botao: "VAI"
                })
            }}
          >
           
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>

      </View>

      <View style={styles.areaUltimoNum}>
          <Text style={styles.textUltimoNum}>
          {
            this.state.ultimoNumero > 0 ? 'Ultimo Tempo: ' + this.state.ultimoNumero : ""

          }
          </Text>
      </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFe",
  },
  timer:{
    marginTop: -180,
    color: "#000",
    fontSize: 60,
    fontWeight: "bold"
  },
  btnArea:{
    flexDirection:"row",
    marginTop: 120,
    height: 50,
  },
  btn:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    height: 50,
    margin: 17,
    borderRadius: 19
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF"
  },
  areaUltimoNum:{
    marginTop: 60,
  },
  textUltimoNum:{
    fontSize: 25,
    color: "#000",
    fontStyle: "italic",
    fontWeight: "bold"

  },
  cronometro:{
    width: 350, 
    height: 350,
  }
})

export default App;