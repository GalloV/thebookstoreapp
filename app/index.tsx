import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Link href="/(auth)/signup">Signup</Link>
      <Link href="/(auth)/index">Login</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        color :"blue",
    }
});

export default index