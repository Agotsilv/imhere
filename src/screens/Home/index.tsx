import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { Participant } from "../../Components/Participant";
import { styles } from './styles'
import { useState } from 'react'
import Toast from 'react-native-toast-message';

export function Home() {
 const [participants, setParticipants] = useState<string[]>([])
 const [participantName, setParticipantName] = useState<string>('')

 const handleParticipantAdd = () => {
  if (participants.includes(participantName)) {
   return Toast.show({
    type: 'error',
    text1: 'Participante Existe!',
    text2: 'Já existe um participante na lista com esse nome.'
   });
  }

  if (participantName === '') {
   return Toast.show({
    type: 'error',
    text1: 'Error',
    text2: 'Este campo não pode ser vazio!'
   });
  }

  setParticipants((prevState) => [...prevState, participantName])

  Toast.show({
   type: 'success',
   text1: 'Adicionado!',
   text2: 'Participante adicionado com sucesso!'
  });
  setParticipantName('')
 }

 const handleParticipantRemove = (name: string) => {
  Alert.alert("Remover", `Remover o participante ${name}?`,
   [
    { text: "Cancelar", style: "cancel" },
    {
     text: "Confirmar", onPress: () => {
      setParticipants(prevState => prevState.filter(participant => participant !== name))
     }
    }
   ]
  )
 }

 return (
  <View style={styles.container} >

   <Text style={styles.eventName}>
    Nome do Evento
   </Text>

   <View style={styles.containerSubTitle}>
    <Text style={styles.eventDate}>
     Sexta, 4 de novembro de 2022,
    </Text>

    <Text style={styles.eventNumber}>
     Participantes: {participants.length}
    </Text>
   </View>

   <View style={styles.form}>
    <TextInput style={styles.input}
     placeholder="Nome do participante"
     placeholderTextColor="#6B6B6B"
     value={participantName}
     onChangeText={setParticipantName}
    />

    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
     <Text style={styles.buttonText}> + </Text>
    </TouchableOpacity>
   </View>

   <FlatList
    data={participants}
    keyExtractor={(item) => item}
    renderItem={({ item, index }) => (
     <Participant name={item} key={index} onRemove={() => handleParticipantRemove(item)} />
    )}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={() => (
     <Text style={styles.listEmptyText} >Ninguém chegou no evento ainda ? Adicione participantes a sua lista de presença!</Text>
    )}
   />

  </View>
 )
}