import { View, Text, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function PostAPI() {

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")
  const [first_name, setFirst] = useState("")
  const [last_name, setLast] = useState("")
  const [middle_name, setMiddle] = useState("")






  const handleClick = async () => {


    const dat = new FormData();
    dat.append("email", email);
    dat.append("password", password);
    dat.append("first_name", first_name);
    dat.append("last_name", last_name);
    dat.append("middle_name", middle_name);
    dat.append("type", "register");


    try {
      const { data } = await axios.post("http://bookdarak.com/api/api.php", dat,

      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };





  return (
    <View>

      <TextInput
        placeholder='email'
        onChangeText={(email) => setEmail(email)}
        value={email}
      /><TextInput
        placeholder='password'
        onChangeText={(password) => setPassword(password)}
        value={password}
      /><TextInput
        placeholder='first name'
        onChangeText={(first_name) => setFirst(first_name)}
        value={first_name}
      /><TextInput
        placeholder='last name'
        onChangeText={(last_name) => setLast(last_name)}
        value={last_name}
      /><TextInput
        placeholder='middle name'
        onChangeText={(middle_name) => setMiddle(middle_name)}
        value={middle_name}
      />
      <Button title="Sign Up" onPress={() => handleClick()} />
    </View>
  )
}