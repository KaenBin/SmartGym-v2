import * as React from 'react';
import { Button, TextInput, View, SafeAreaView, Image, StyleSheet, Text, Pressable } from 'react-native';
import { AuthContext } from './utils';

export function SignUpScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signUp } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 2, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={[styles.containerBox, { marginTop: 50 }]}>
          <Text style={styles.textStyle2}>Username:</Text>
          <View style={styles.textBox}>
            <TextInput
              value={username}
              onChangeText={setUsername}
              style={{ margin: 10 }}
              placeholder='Username'
              placeholderTextColor='#BEBEBE'
            />
          </View>
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.textStyle2}>Password:</Text>
          <View style={styles.textBox}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={{ margin: 10 }}
              placeholder='Password'
              placeholderTextColor='#BEBEBE'
            />
          </View>
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.textStyle2}>Confirm Password:</Text>
          <View style={styles.textBox}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={{ margin: 10 }}
              placeholder='Confirm Password'
              placeholderTextColor='#BEBEBE'
            />
          </View>
        </View>
        <Pressable style={styles.buttonStyle} onPress={() => signUp({ username, password })}>
          <Text style={styles.signinStyle}>SIGN UP</Text>
        </Pressable>
        <Pressable onPress={() => navigation.popToTop()}>
          <Text style={styles.textStyle3}>Already got an account? SIGN IN!</Text>
        </Pressable>
      </View>
      <Text style={styles.textHCMUT}>
        <Text>powered by</Text>
        <Text style={{ fontWeight: "bold" }}> HCMUT</Text>
      </Text>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#59A3EC',
    color: 'black',
    borderRadius: 15,
    justifyContent: 'center',
    height: 50,
    marginTop: 80,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  containerBox: {
    margin: 15,
  },
  signinStyle: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  textBox: {
    borderBottomWidth: 1,
    height: 40,
    width: 300,
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    justifyContent: 'flex-end',
  },
  textHCMUT: {
    alignSelf: 'center',
    color: '#1976D2',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    margin: 10,
    marginTop: 'auto',
  },
  textStyle2: {
    color: '#1976D2',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  textStyle3: {
    color: '#939393',
    fontSize: 17,
    textDecorationLine: 'underline',
    textAlign: 'center',
    margin: 10,
  },
});