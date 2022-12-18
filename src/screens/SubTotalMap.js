import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ioniccheckmark from 'react-native-vector-icons/Ionicons';
import Ionicplus from 'react-native-vector-icons/AntDesign';
import Ionicminus from 'react-native-vector-icons/EvilIcons';

export default function SubTotalMap() {


    // const [counta, setCounta] = useState(1)
    const [count, setCount] = useState('01')
    const [item, setItem] = useState(45)


    const [ary, setAry] = useState([
        {
            id: 1,
            prodname: 'Facial Cleanser',
            image: require("../assests/chicken.jpg"),
            price: 10,
            size: '7.60 fl oz / 225ml',
            quant:1

        },
        {
            id: 2,
            prodname: 'CC Cleanser',
            image: require("../assests/chicken.jpg"),
            price: 15,
            size: '7.60 fl oz / 225ml',
            quant:1,

        },
        {
            id: 3,
            prodname: 'UUU Cleanser',
            image: require("../assests/chicken.jpg"),
            price: 20,
            size: '7.60 fl oz / 225ml',
            quant:1

        }]


    );




    const IncreHandle = (prc,indd) => {

        // setIdd(data)
        // console.log(data);


        if (count < 9) {
            const add = parseInt(count) + 1
            setCount(`0${add}`)
            setItem(item + prc)



        } else {
            const add = parseInt(count) + 1
            setCount(add)
            setItem(item + prc)
        }
    }

    const decreHandle = (prcc) => {


        if (count > 1 && count < 11) {
            const add = parseInt(count) - 1
            setCount(`0${add}`)
            setItem(item - prcc)

        } else if (count > 1) {
            const add = count - 1
            setCount(add)
            setItem(item - prcc)
        } else {
            alert("please add postive value")
        }

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
                    ary.map((item, index) => <View key={index}>


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
                                        <TouchableOpacity onPress={() => decreHandle(item.price)}>
                                            <Ionicminus name="minus" size={28} color="black" />
                                        </TouchableOpacity>
                                        <Text>{count} </Text>
                                        <TouchableOpacity onPress={() => IncreHandle(item.price,index)}>
                                            <Ionicplus name="pluscircle" size={20} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                </View>



                            </View>



                        </View>

                    </View>)
                }


                <Text>SubTotal{item}</Text>
            </View>
        </View>
    )
}