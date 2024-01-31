import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

const Register = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [eamil, setEmail] = React.useState('');
  return (
    <View style={styles.Container}>
      <Text style={styles.font}>สมัครสามาชิก</Text>
      <TextInput style={styles.UserContainer}
      label="Username"
      value={username}
      onChangeText={text => setUsername(text)} />
      <TextInput style={styles.UserContainer}
        label="Email"
        value={eamil}
        onChangeText={text => setEmail(text)} />
        <TextInput style={styles.UserContainer}
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)} />
        <TextInput style={styles.UserContainer}
        label="Confrim Password"
        value={password}
        onChangeText={text => setPassword(text)} />
        <Button mode="contained" onPress={() => console.log('Pressed')}>
    Register
  </Button>
  </View>
        
  )
}

export default Register

const styles = StyleSheet.create({
  Container:{
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 0.8,
    width: 350,
  },
  font:{
    fontSize: 30,
    marginBottom: 10
  },
  UserContainer:{
    marginBottom: 5
  },
  UserEmail:{
    marginBottom: 5
  },
  UserPassword:{
    marginBottom: 5
    
  }
})