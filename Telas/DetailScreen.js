import { Button, StyleSheet, Text, View } from 'react-native';

const DetailScreen= ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Voce esta em   </Text>
      if(usestate True) {

      }
      else{

      }
      <Button 
      title= 'Alugar'
      onPress={() => navigation.navigate("Home")}

      />
      <container>
        <Text>
          NOME:
          
        </Text>
        <container>
        <Text>
          
        </Text>
        </container>
        <Text>
        DATA DE NASCIMENTO: DD/MM/AAAA
        </Text>
      </container>
      
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});