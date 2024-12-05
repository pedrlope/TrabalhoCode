import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
const HomeScreen = ({ navigation }) => {
  return (
    <div style={styles.container}>
      <Text>Você está na Home Screen</Text>
        <Link to ="/DetailScreen">
        VA A PAGINA Details
        </Link>
    </div>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
