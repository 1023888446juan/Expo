import { View, Text, StyleSheet } from "react-native";

const inicio = ()=>{
  return(
    <View style={estilos.container}>
      <Text style={estilos.title}>Hola ficha 3407181</Text>
    </View>
  )
}

export default inicio


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //flexDirection: 'row',
  },

  title: {
    textAlign: 'center',
    fontSize: 50,
    fontFamily: "Cursive",
    color: "#a200ff"
  },
  code: {
    textTransform: 'uppercase',
  }
});