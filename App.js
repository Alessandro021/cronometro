
import React, { Component} from 'react'
import { View , Text, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
  
class App extends Component{

  render(){
    return(
      <View style={styles.container}>

        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
          // style={{width: 100, height: 100}} 
        />

      <Text style={styles.timer}>0.0</Text>

      <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTexto}>VAI</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
           
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>

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
    backgroundColor: "#00aeef",
  },
  timer:{
    marginTop: -180,
    color: "#fff",
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
  cronometro:{
    width: 350, 
    height: 350,
  }
})

export default App;