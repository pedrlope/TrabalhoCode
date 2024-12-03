import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './Telas/DetailScreen';
import HomeScreen from './Telas/';

const Stack = createNativeStackNavigator()
export default function App (){
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen 
     name='Home'
     component={HomeScreen}
    />
     <Stack.Screen
     name='details'
     component={DetailScreen}
     />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
[Route("tela2")]

return(
<View style={styles.container}>
      <Text style={styles.label}>digite o nome do locatario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={taskTitle}
        onChangeText={setTasktitle}
        />

        <Text style={styles.label}>digite a data de nascimento do locatario</Text>
        <TextInput>
          style={[styles.input, styles.textArea]}
          placeholder ="DD/MM/AAAA"
          </TextInput>
          </View>
          );