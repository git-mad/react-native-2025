import { Text, View, StyleSheet, TextInput, Button, Image } from "react-native";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
// import { NavigationContainer, NavigationProp } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { router } from 'expo-router';
import HomeScreen from "./home";

export default function Index({ navigation }: { navigation: NavigationProp<any, any> }) {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [logInError, setLogInError] = useState("");
  const auth = FIREBASE_AUTH;


  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("logged in");
      router.push({
        pathname: "/home",
        params: { email: email },
      });

    }).catch((error) => {
      console.log(error);
      setLogInError(error.message);
    });

  };
  const createAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("signed in");
      router.push({
        pathname: "/home",
        params: { email: email },
      });
    }).catch((error) => {
      console.log(error);
      setLogInError(error.message);
    });

  };

  return (
    <View
      style={styles.container}
    >
      <Image source={require("@/assets/images/fun-fact.png")} style={{ width: 150, height: 150, marginBottom: 50 }}/>
      <Text style={styles.title}>Welcome</Text>
      <TextInput value={email} style={styles.textInput} placeholder="email" onChangeText={(text) => setEmail(text)}></TextInput>
      <TextInput value={password} secureTextEntry={true} style={styles.textInput} placeholder="password" onChangeText={(text) => setPass(text)}></TextInput>
      
      <View  style={styles.butttonContainer} />
        <Button title="Log in" onPress={signIn}></Button>
      <View  style={styles.butttonContainer} />
      <Text> or </Text>
      <View  style={styles.butttonContainer} />
        <Button title="Sign up" onPress={createAccount}></Button>
      <View  style={styles.butttonContainer} />
      {logInError ? <Text style={styles.text}>{logInError}</Text> : null}

    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 4,
    height: 50,
    width: 250,
    borderWidth : 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#ffff'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff6d4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 15,
    color: 'black',
  },
  butttonContainer: {
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});