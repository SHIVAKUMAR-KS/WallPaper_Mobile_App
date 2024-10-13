import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function(){
  const [count,setCount]=useState(0);

  useEffect(()=>{
    let interval=setInterval(() => {
      setCount(c=>c+1)
    }, 1000)
    return ()=>{
      clearInterval(interval)
    }
  },[])

  return <SafeAreaView>
    <Text>Index page</Text>
   
  </SafeAreaView>
}