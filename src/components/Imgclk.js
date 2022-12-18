import { View, Text,Image } from 'react-native'
import React from 'react'

export default function Imgclk({img,text}) {
  return (
    <View >
        <View>
      
      <Image source={img} style={{ height: 150, width: 150,borderRadius:10 }} />
      <Text style={{textAlign:'center'}}>{text}</Text>
      </View>
    </View>
  )
}