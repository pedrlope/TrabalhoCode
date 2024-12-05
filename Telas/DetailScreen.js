import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const DetailScreen= ({navigation}) => {
  return (
    <div style={styles.container}>

      <Link to = "/HomeScreen"> 
      VA A PAGINA HomeScreen
      </Link> 
    </div>
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