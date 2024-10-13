import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
    return <SafeAreaView>
        <Text>Hi there</Text>
        <View style={{height:"90%"}}>
                <Slot/>
        </View>
        <View style={{backgroundColor:"red"}}>
            <Link href={"/account"}>
                <Text>Take me to account page</Text>
            </Link>
            <Link href={"/foryou"}>
                <Text>Take me to for you page</Text>
            </Link>
            <Link href={"/explore"}>
                <Text>Take me to explore page</Text>
            </Link>

        </View>

        

    </SafeAreaView>
}