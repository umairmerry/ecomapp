import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ioniccheckmark from 'react-native-vector-icons/Ionicons';
import Ionicplus from 'react-native-vector-icons/AntDesign';
import Ionicminus from 'react-native-vector-icons/EvilIcons';

export default function SubTotal() {
    const [count, setCount] = useState('01')
    const [counta, setCounta] = useState('01')

    const [item, setItem] = useState(19)
    const [itemone, setItemone] = useState(12)

    const [totla,setTotla]=useState()
    const [totl, setTotl] = useState(31)


    const [ary, setAry] = useState(
        {
            id: 1,
            prodname: 'Facial Cleanser',
            image: require("../assests/chicken.jpg"),
            price: '$19.98',
            size: '7.60 fl oz / 225ml'

        }

    );


    const IncreHandle = () => {
        if (count < 9) {
            const add = parseInt(count) + 1
            setCount(`0${add}`)
            setItem(item + 19)

            setTotl(item + itemone)
            
        } else {
            const add = parseInt(count) + 1
            setCount(add)
            setItem(item + 19)
        }
    }

    const decreHandle = () => {

        if (count > 1) {
            const add = parseInt(count) - 1
            setCount(`0${add}`)
            setItem(item - 19)
            // setTotl(item - itemone)
        }
        else {
            alert("please add postive value")
        }
    }


    const IncreHandlea = () => {
        if (counta < 9) {
            const add = parseInt(counta) + 1
            setCounta(`0${add}`)
            setItemone(itemone + 12)
            setTotl(item + itemone)
        } else {
            const add = parseInt(counta) + 1
            setCounta(add)
            setItemone(itemone + 12)
        }
    }

    const decreHandlea = () => {

        if (counta > 1) {
            const add = parseInt(counta) - 1
            setCounta(`0${add}`)
            setItemone(itemone - 12)
            // setTotl(item - itemone)
        }
        else {
            alert("please add postive value")
        }

    }


    // const remv = (index) => {

    //     const upload = ary.filter((item, i) => {
    //         return index != i
    //     })
    //     setAry(upload)
    // }
    
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            {/* {
                ary.map((item, index) => <View key={index}> */}

            <View style={{ height: 100, width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ marginLeft: 15 }}>
                    <Image style={{ height: 80, width: 80, borderRadius: 10 }} source={require('../assests/chicken.jpg')} />

                </View>
                <View style={{ flexDirection: "row", marginRight: 15 }}>
                    <View style={{ marginRight: 20 }}>

                        <Text style={{ color: "black", fontSize: 18 }}>{ary.prodname}</Text>
                        <Text>Size: {ary.size}</Text>
                        <Text style={{ color: "black", fontSize: 18 }}>$19</Text>

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
                            <TouchableOpacity onPress={() => IncreHandle()}>
                                <Ionicplus name="pluscircle" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>



                </View>



            </View>
            <View style={{ height: 100, width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ marginLeft: 15 }}>
                    <Image style={{ height: 80, width: 80, borderRadius: 10 }}source={require('../assests/chicken.jpg')} />

                </View>
                <View style={{ flexDirection: "row", marginRight: 15 }}>
                    <View style={{ marginRight: 20 }}>

                        <Text style={{ color: "black", fontSize: 18 }}>Cream Cleanser</Text>
                        <Text>Size: {ary.size}</Text>
                        <Text style={{ color: "black", fontSize: 18 }}>$12</Text>
                        {/* <Text style={{ color: "black", fontSize: 18 }}>{itemone}</Text> */}

                    </View>

                    <View >

                        <View >
                            <TouchableOpacity onPress={() => remv(index)}>
                                <Text style={{ alignSelf: "flex-end", fontSize: 18, fontWeight: "bold" }}>x</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 30 }}>
                            <TouchableOpacity onPress={() => decreHandlea()}>
                                <Ionicminus name="minus" size={28} color="black" />
                            </TouchableOpacity>
                            <Text>{counta} </Text>
                            <TouchableOpacity onPress={() => IncreHandlea()}>
                                <Ionicplus name="pluscircle" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>



                </View>



            </View>

          

            <Text style={{fontSize:30}}>SubTotal:{totl}</Text>
            {/* <Text style={{fontSize:30,marginTop:20}}>SubTotal:{itemone}</Text> */}


        </View>

    )
}