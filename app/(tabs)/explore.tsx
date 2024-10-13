import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore(){

    return <SafeAreaView style={{backgroundColor:"blue"}}>
        <Text>Explore page</Text>

        <Link href={"/accountInfo"}>
        <Text>Account Information</Text>
        </Link>
     
   </SafeAreaView>

}