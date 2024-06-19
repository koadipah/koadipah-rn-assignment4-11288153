import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === '' || name === '') {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }
    console.log('Navigating to Home with:', { name, email });
    navigation.navigate('Home', { name, email }); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.headingFirst}>Jobizz</Text>
        <View style={styles.welcomeSection}>
          <Text style={styles.headingSecond}>
            Welcome Back <Image source={require("../assets/wave.jpeg")} style={styles.headerImage} />
          </Text>
          <Text style={styles.headingThird}>Let's Log in. Apply to jobs!</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Name'
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder='E-mail'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
            style={styles.input}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress= {handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line}>
          <Text style={styles.continueText}>or continue with</Text>  
        </View>

        <View style={styles.socialImageContainer}>
          <Image source={require("../assets/google.jpeg")} style={styles.socialImage}/>
          <Image source={require("../assets/apple.png")} style={styles.socialImage}/>
          <Image source={require("../assets/face.jpeg")} style={styles.socialImage}/>
        </View>

        <View>
          <Text style={styles.continueText}>
            Haven't an account?  <Text style={styles.registerText}>Register</Text>
          </Text>
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBar: {
    flex: 1,
    width: '100%',
    marginTop: 70,
    paddingHorizontal: 20,
  },
  headerImage: {
    width: 40,
    height: 40,
  },
  headingFirst: {
    marginTop: 50,
    fontSize: 34,
    fontWeight: 'bold',
    color: '#356899',
  },
  welcomeSection: {
    marginBottom: 30,
  },
  headingSecond: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headingThird: {
    fontSize: 20,
    marginTop: 5,
    color: '#BEBEBE',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    borderColor: '#BEBEBE',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 6,
    padding: 15,
    width: '100%',
  },
  button: {
    backgroundColor: '#356899',
    paddingVertical: 15,
    paddingHorizontal: 148,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  line: {
    alignItems: 'center',
    marginTop: 20,
  },
  continueText: {
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
  socialImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialImage: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  registerText: {
    color: '#356899',
  },
});
