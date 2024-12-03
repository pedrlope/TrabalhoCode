import { Button, StyleSheet, Text, View } from 'react-native';

const DetailScreen= ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Voce esta na Detail Screen</Text>
      <Button 
      title= 'Home'
      onPress={() => navigation.navigate("Home")}

      />
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