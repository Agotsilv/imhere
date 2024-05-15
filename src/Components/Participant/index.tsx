import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Components/Participant/styles";

export function Participant({ name, onRemove }: iProps) {
 return (
  <View style={styles.container}>
   <Text style={styles.name}> {name} </Text>

   <TouchableOpacity style={styles.button} onPress={onRemove}>
    <Text style={styles.buttonText}> - </Text>
   </TouchableOpacity>
  </View>
 )
}