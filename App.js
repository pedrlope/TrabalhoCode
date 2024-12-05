import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, BrowserRouter as Router,Route, Link } from "react-native";
import DetailScreen from './Telas/DetailScreen';
import HomeScreen from './Telas/HomeScreen';
import React from "react";
import ReactDOM from "react-dom";



function App (){
  return (
    <div className= "App">
    <Router>
      <Routes style ={styles.container}>
        <Link to="/Home">
        </Link>
    <Route exact path = "/Home" element={<HomeScreen/>}/>
     <Route path ="/Details" element={<DetailScreen/>}/>
     </Routes>
    </Router>
    </div>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  header: {
    fontSize: 20
  },
})
export default App