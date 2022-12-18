import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ioniccheckmark from 'react-native-vector-icons/Ionicons';
import Ionicplus from 'react-native-vector-icons/AntDesign';
import Ionicminus from 'react-native-vector-icons/EvilIcons';

export default function SubTotalExpo() {

     const [count, setCount] = useState('01')
    const [totl, setTotl] = useState(45)



  const [ary, setAry] = useState([
    {
      id: 1,
      prodname: 'Facial Cleanser',
      image: require("../assests/chicken.jpg"),
      price: 10,
      size: '7.60 fl oz / 225ml'

    },
    {
      id: 2,
      prodname: 'CC Cleanser',
      image: require("../assests/chicken.jpg"),
      price: 20,
      size: '7.60 fl oz / 225ml'

    },
    {
      id: 3,
      prodname: 'UUU Cleanser',
      image: require("../assests/chicken.jpg"),
      price: 5,
      size: '7.60 fl oz / 225ml'

    }]


  );




  const IncreHandle = (pric) => {


    const ad = count
    setCount(ad + 1)
    const vlu = totl
    setTotl(vlu + pric)
    console.log(count);



  }



  const decreHandle = () => {




    // if (count > 1) {
    //     const add = parseInt(count) - 1
    //     setCount(`0${add}`)
    //     setItem(item - 10)

    // }
    // else {
    //     alert("please add postive value")
    // }
  }


  const remv = (index) => {

    const upload = ary.filter((item, i) => {
      return index != i
    })
    setAry(upload)
  }

  return (
    <View >
      <View >
        {
          ary.map((item, index) => <View key={index} >


            <View style={{ height: 100, width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ marginLeft: 15 }}>
                <Image style={{ height: 80, width: 80, borderRadius: 10 }} source={item.image} />

              </View>
              <View style={{ flexDirection: "row", marginRight: 15 }}>
                <View style={{ marginRight: 20 }}>

                  <Text style={{ color: "black", fontSize: 18 }}>{item.prodname}</Text>
                  <Text>Size: {item.size}</Text>
                  <Text style={{ color: "black", fontSize: 18 }}>{item.price}</Text>

                </View>

                <View >

                  <View >
                    <TouchableOpacity onPress={() => remv(index)}>
                      <Text style={{ alignSelf: "flex-end", fontSize: 18, fontWeight: "bold" }}>x</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection: "row", marginTop: 30 }}>
                    <TouchableOpacity onPress={() => decreHandle()}>
                      <Ionicminus name="minus" size={28} color="black" />
                    </TouchableOpacity>
                    <Text>{count} </Text>
                    <TouchableOpacity onPress={() => IncreHandle(item.price)}>
                      <Ionicplus name="pluscircle" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>



              </View>



            </View>

          </View>)
        }





      </View>
      <Text>jjj{totl}</Text>
    </View>
  )
}