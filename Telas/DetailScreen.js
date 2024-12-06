import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { Pressable } from 'react-native';
import { useState } from 'react';
 


function DetailScreen() {
const [alugar, setAlugar] = useState(false)

  return (
    <View style={styles.container}>

      <Link to = "/HomeScreen"> 
      VA A PAGINA HomeScreen
      </Link> 
    
  
              <container>
               NOME:   
              <container>

              </container>
              DATA DE NASCIMENTO: DD/MM/AAAA
              <Pressable onPress={() => (
                router.push({
                    pathname: "Home/[id]",
                    params: {id: id}
                })
            )}>
                           
              </Pressable>
              </container>
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
});
export default DetailScreen