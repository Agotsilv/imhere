import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { Participant } from "../../Components/Participant";
import { styles } from './styles'

export function Home() {
 const participants = ["Rodrigo", "Tiago", "Diego", "Biro", "Ana", "Lucas", "Carla", "João", "Mariana", "Pedro"]

 const handleParticipantAdd = () => {
  if (participants.includes('Rodrigo')) {
   return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome.")
  }
 }

 const handleParticipantRemove = (name: string) => {
  Alert.alert("Remover", `Remover o participante ${name}?`,
   [
    {
     text: "Cancelar",
     style: "cancel"
    },
    {
     text: "Confirmar",
     onPress: () => console.log("Removido participante")
    }
   ]
  )
 }

 return (
  <View style={styles.container} >

   <Text style={styles.eventName}>
    Nome do Evento
   </Text>

   <Text style={styles.eventDate}>
    Sexta, 4 de novembro de 2022
   </Text>

   <View style={styles.form}>
    <TextInput style={styles.input}
     placeholder="Nome do participante"
     placeholderTextColor="#6B6B6B"
    />

    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
     <Text style={styles.buttonText}> + </Text>
    </TouchableOpacity>
   </View>

   <FlatList
    data={participants}
    keyExtractor={item => item}
    renderItem={({ item }) => (
     <Participant name={item} key={item} onRemove={() => handleParticipantRemove(item)} />
    )}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={() => (
     <Text style={styles.listEmptyText} >Ninguém chegou no evento ainda ? Adicione participantes a sua lista de presença!</Text>
    )}
   />

  </View>
 )
}