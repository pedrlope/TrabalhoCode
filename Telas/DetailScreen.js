import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { Pressable } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-web';
import { router } from 'expo-router';



function DetailScreen() {
  const [alugar, setAlugar] = useState(false)
  const [dataNasc, setdataNasc] = useState(0);
  const [nome, setNome] = useState("");

  const Cadastro = () => {

    if (dataNasc <= 1960 && nome != "") {
      setAlugar = (true);
      router.push({
        pathname: "Telas/HomeScreen",
      })
    }
    else {
      setAlugar = (false);
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.label}> NOME: </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <View style={styles.container2}>
        <Text style={styles.label2}> ANO DE NASCIMENTO: AAAA </Text>

        <TextInput
          style={styles.input2}
          placeholder="Ano de nascimento"
          value={dataNasc}
          onChangeText={setdataNasc}
        />

      
            <Pressable 
              title='alugar'
              color='darkgreen'
              onPress={() => ( Cadastro() 
            )}>
            </Pressable>  
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    margemBottom: 8

  },
  label2: {
    fontSize: 16,
    fontWeight: 'bold',
    margemBottom: 8

  },
  input: {
    borderWitdth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16
  },
  input2: {
    borderWitdth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16
  },
});
export default DetailScreen
