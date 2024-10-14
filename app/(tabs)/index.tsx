import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function(){
  // const [count,setCount]=useState(0);

  // useEffect(()=>{
  //   let interval=setInterval(() => {
  //     setCount(c=>c+1)
  //   }, 1000)
  //   return ()=>{
  //     clearInterval(interval)
  //   }
  // },[])

  return <SafeAreaView>
    <Link href={'/library'}>
        <Text>page 1</Text>
    </Link>
    <Link href={'/liked'}>
        <Text>page 2</Text>
    </Link>
    <Link href={'/suggested'}>
        <Text>page 3</Text>
    </Link>
    <Text>For You Page</Text>
  
  </SafeAreaView>
}