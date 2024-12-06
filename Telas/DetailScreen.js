import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { Pressable } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-web';



function DetailScreen() {
  const [alugar, setAlugar] = useState(false)
  const [dataNasc, setdataNasc] = useState(0);


  const Cadastro = () => {
    setAlugar(false);
    if (dataNasc <= 1960 && nome != "") {
      setAlugar = (true);

    }
    else {
      setAlugar = (false);
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.label}> NOME: </Text>
      
      <TextInput
       

        /> 

      <View style={styles.container2}>
      <Text style={styles.label2}> ANO DE NASCIMENTO: AAAA </Text>

      <TextInput
       

        />

      {
        alugar ?
          <Pressable onPress={() => (
            router.push({
              pathname: "HomeScreen",
              params: { id: id }
            })
          )}>
            
          </Pressable>
          : <></>
      }
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
});
export default DetailScreen