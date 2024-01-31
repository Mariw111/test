import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';


    export default function Login ({navigation}){
      const [username, setUsername] = React.useState('');
      const [password, setPassword] = React.useState('');
  return (
    <View style={styles.container}>
        <View style={styles.ImageContainer}>
        <Image source={require('../img/RUSH.jpg')}
        style={{width: 340, height: 250}}></Image>
        </View>
    <View style={styles.InputContainer}>
      <TextInput
      label="Username"
      value={username}
      onChangeText={text=> setUsername(text)}
    />
    <TextInput
      label="Password"
      secureTextEntry
      right={<TextInput.Icon icon="" />}
      value={password}
      onChange={text => setPassword(text)}
    />
    <Button style={styles.ButtonContainer} mode="elevated" onPress={() => console.log('Pressed')}>
    Login
    </Button>
    <Button style={styles.ButtonContainer} mode="elevated" onPress={() => navigation.navigate('MainTabScreen')}>
    Register
    </Button>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        maxWidth: 340,
        alignSelf: "center",
        justifyContent: "center"
    },
    ImageContainer:{
        alignSelf: "center",
        padding: 14,
        bottom: 5
    },
    ButtonContainer:{
        margin: 10,
        alignSelf: 'center',
        width: '60%',
        backgroundColor: '#FFCD05'
    },
})