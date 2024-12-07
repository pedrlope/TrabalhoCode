import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

import React from "react";
import react from 'react';
import { router } from 'expo-router';



export default function Page (){

 const exaple = [{id:1}, {id: 2}, {id: 3}, {id: 4}]


  return (
      <View>
       {exaple.map((item, index) =>(
         <Pressable onPress={() =>{
          router.push({
            pathname: "books/[id]",
            params: {id: item.id}
          })
         }}>
          <Text>go to Page book {item.id}</Text>
         </Pressable>
        ))}
      
      
    </View>
  )
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
