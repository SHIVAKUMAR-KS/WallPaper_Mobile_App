import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";

export default function Layout(){
    return <View>
        <Text>Hi there</Text>
        <Link href={"/account"}>
        <Text>Take me to account page</Text>
    </Link>
    <Link href={"/foryou"}>
        <Text>Take me to for you page</Text>
    </Link>
    <Link href={"/explore"}>
        <Text>Take me to explore page</Text>
    </Link>

    <Slot/>

    </View>
}