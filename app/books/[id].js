import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function BooksPage() {
  const {id} =useLocalSearchParams
  return(
    <View style ={style.container}>
                                            
    <Text>My book Page {id}</Text> 
        
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
})