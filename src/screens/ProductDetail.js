import { View, Text, ImageBackground, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'

export default function ProductDetail({ navigation, route }) {
  let { title, pric, imgg, updt } = route.params;
  // let { title, pric, imgg} = route.params;
  const [count, setCount] = useState(1)
  const [valu, setValu] = useState(pric)


  const incrihandle = () => {

    const updt = count + 1
    setCount(updt)
    // let fpa = valu + pric
    let fpa = updt * pric
    setValu(fpa.toFixed(2));


  }

  // console.log("ejns",lst);



  const decrihandle = () => {

    if (count == 1) {

      alert("Add the value")
    } else {
      const updt = count - 1
      setCount(updt)
      let fp = valu - pric
      setValu(fp.toFixed(2));
      setCount(updt)
    }


  }



  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={{ width: "100%", height: 250 }} source={{ uri: imgg }}>
      </ImageBackground>

      <Text style={{ marginHorizontal: "5%", fontSize: 16, color: "black", marginTop: 10 }}>{title}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "5%", marginTop: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => decrihandle()}>
            <Text style={{ fontSize: 50, fontWeight: "bold" }}>-</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 15, marginLeft: 10, height: 40, width: 40, borderRadius: 13, backgroundColor: "#53B175", justifyContent: "center" }}>
            <Text style={{ alignSelf: "center" }}>{count}</Text>

          </View>
          <TouchableOpacity onPress={() => incrihandle()}>
            <Text style={{ marginTop: 15, marginLeft: 10, fontSize: 30, fontWeight: "bold" }}>+</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "bold", color: "black" }}>{valu}</Text>
        </View>


      </View>
      <TouchableOpacity onPress={() => navigation.navigate("AddToCart", {
        updt,
        newcount:count,
        newvlu:valu,
        newpric:pric
      })}>
        <View style={{ height: 70, width: "90%", backgroundColor: "green", justifyContent: "center", alignSelf: "center" }}>
          <Text style={{ color: "white", alignSelf: "center" }}>Add To Cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}