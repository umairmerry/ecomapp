import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ioniccheckmark from 'react-native-vector-icons/Ionicons';
import Ionicplus from 'react-native-vector-icons/AntDesign';
import Ionicminus from 'react-native-vector-icons/EvilIcons';




export default function SubTotalSample() {


  // const [counta, setCounta] = useState(1)
  // const [count, setCount] = useState('01')
  const [item, setItem] = useState(45)


  const [ary, setAry] = useState(
    [
      {
        id: 1,
        prodname: 'Facial Cleanser',
        image: require("../assests/chicken.jpg"),
        price: 10,
        size: '7.60 fl oz / 225ml',
        quant: 1

      },
      {
        id: 2,
        prodname: 'CC Cleanser',
        image: require("../assests/chicken.jpg"),
        price: 15,
        size: '7.60 fl oz / 225ml',
        quant: 1,

      },
      {
        id: 3,
        prodname: 'UUU Cleanser',
        image: require("../assests/chicken.jpg"),
        price: 20,
        size: '7.60 fl oz / 225ml',
        quant: 1

      }]
  );




  const IncreHandle = (indd, prcc) => {

    const nextProducts = [...ary];
    nextProducts[indd].quant += 1;
    setAry(nextProducts);

    setItem(item + prcc)

    // const nextProducts = [...ary];
    // const pp= nextProducts[indd].price
    // nextProducts[indd].quant += 1;
    // nextProducts[indd].price += pp;
    // setAry(nextProducts);

  }

  const decreHandle = (ind, prc) => {


    if (ary[ind].quant == 0) {
      alert("Add the item only")
    }
    else {
      const nextProducts = [...ary];
      nextProducts[ind].quant -= 1;
      setAry(nextProducts);

      console.log(nextProducts);

      setItem(item - prc)
    }
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
          ary.map((item, index) => <View key={index}>
            <View style={{ height: 100, width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ marginLeft: 15 }}>
                <Image style={{ height: 80, width: 80, borderRadius: 10 }} source={item.image} />
              </View>
              <View style={{ flexDirection: "row", marginRight: 15 }}>
                <View style={{ marginRight: 20 }}>
                  <Text style={{ color: "black", fontSize: 18 }}>{item.prodname}</Text>
                  <Text>Size: {item.size}</Text>
                  <Text style={{ color: "black", fontSize: 18 }}>${item.price}</Text>
                </View>
                <View >
                  <View >
                    <TouchableOpacity onPress={() => remv(index)}>
                      <Text style={{ alignSelf: "flex-end", fontSize: 25, fontWeight: "bold" }}>x</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection: "row", marginTop: 30 }}>
                    <TouchableOpacity onPress={() => decreHandle(index, item.price)}>
                      <Ionicminus name="minus" size={28} color="black" />
                    </TouchableOpacity>
                    <Text style={{ width: 20, textAlign: "center" }}>{item.quant < 10 ? '0' + item.quant : item.quant} </Text>
                    <TouchableOpacity onPress={() => IncreHandle(index, item.price)}>
                      <Ionicplus name="pluscircle" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>)
        }
        <Text style={{ fontSize: 20 }}>SubTotal: ${item}</Text>
        {/* <Text>Total Quantity {totalQuantity}</Text>
         <Text>Total Quantity {totalPrice}</Text> */}
      </View>
    </View>
  )
}