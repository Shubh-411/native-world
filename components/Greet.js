import { View, Text } from "react-native";

function Greet({name}){
    return (
        <View>
            <Text>Hello, {name}</Text>
        </View>
    )
}

export default Greet;