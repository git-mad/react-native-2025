import { useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { FIRESTORE_DB } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore"; 
import { useState } from 'react';


export default function FactScreen() {
  const db = FIRESTORE_DB;
  const [funFact, setFact] = useState("");
  const { email } = useLocalSearchParams();
  const saveFact = async (fact: string) => {
    try {
      const docRef = await addDoc(collection(db, "funFacts"), {
        fact: fact,
        email: email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to the fun fact board!</Text>
        <Text style={styles.text}>Signed in with email {email}</Text>
      </View>

      <Text style={styles.text}>Enter a fun fact!</Text>  
      <TextInput value={funFact} style={styles.textInput} placeholder="enter a fun fact!" onChangeText={(text) => setFact(text)}></TextInput>
      <View  style={styles.butttonContainer} />
        <Button title="Save fact" onPress={() => saveFact(funFact)}></Button>
      <View  style={styles.butttonContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff6d4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 15,
    padding: 10,
  },
  textInput: {
    marginVertical: 4,
    height: 50,
    width: 250,
    borderWidth : 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#ffff'
    
  },
  butttonContainer: {
    paddingBottom: 10,
  },
  titleContainer: {
    paddingBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});
