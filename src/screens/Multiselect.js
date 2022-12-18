// import { View, Text, FlatList, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'

// export default function Multiselect() {
//     const [data, setData] = useState([
//         false,
//         false

//     ]);

//     const onSelect = ind => {
//         const tempData = []
//         data.map((item, index) => {
//             if (index = ind) {
//                 tempData.push(true)
//             }
//             else {
//                 tempData.push(false)

//             }
//         })

//         setData(tempData)
//     }
//     return (
//         <View style={{ flex: 1 }}>
//             <View>


//                 <FlatList
//                     data={data}
//                     renderItem={({ item, index }) => {
//                         <TouchableOpacity
//                             style={{

//                                 width: '100%', height: 70, borderColor: "grey", borderWidth: 1,
//                                 justifyContent: "center", alignItems: "center", backgroundColor: item == true ? 'green' : 'white'

//                             }} onPress={() => { onSelect(index) }}>

//                             <Text style={{ fontSize: 40 }}> {'item' + (index + 1)}</Text>



//                         </TouchableOpacity>
//                     }}

//                 />
//                 <Text>Multiselect</Text>
//             </View>
//         </View>
//     )
// }

import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import pizza from '../assests/pizza.jpg'
import * as Progress from 'react-native-progress';




export default function Multiselect() {

    const Data = [
        {
            id: 1,
            subject: 'Pizza',
            image: require("../assests/chicken.jpg"),
            selected: false,

        },
        {
            id: 2,
            subject: 'Chicken',
            image: require("../assests/chicken.jpg"),
            selected: false
        },
        {
            id: 3,
            subject: 'Chicken',
            image: require("../assests/chicken.jpg"),
            selected: false
        },
        {
            id: 4,
            subject: 'Checken',
            image: require("../assests/chicken.jpg"),
            selected: false
        }
    ]


    const [select, setSelect] = useState(Data);
    console.log("selecteditem", select);
    const handleOnpress = (item) => {
    const newItem = select.map((val) => {
            if (val.id === item.id)
                return { ...val, selected: !val.selected }
            else {
                return val;
            }
        })
        setSelect(newItem)
    }

    return (
        <View>
            <View style={{ alignSelf: "center", marginTop: 20 }}>
                <Progress.Bar progress={0.5} width={320} />
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <Text style={{ color: "black", fontSize: 28, fontWeight: "400" }}>
                    What's your favorite food?
                </Text>
                <Text style={{ fontSize: 16 }}>
                    This will help us give you recommendation
                </Text>
                <Text>

                </Text>
            </View>

            <FlatList
                data={select}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (

                        <TouchableOpacity onPress={() => handleOnpress(item)}>
                            <View style={{ alignSelf: "center", marginTop: 10, padding: 20 }}>
                                <View style={{}}>
                                    <Image style={{
                                        height: 200, width: 200, borderColor: item.selected ? 'black' : null, borderWidth: 3,



                                    }} source={item.image} />
                                </View>


                                {/* <ImageOverlay style={{height: 200, width: 200}} source={item.image} /> */}

                                <Text style={{ textAlign: "center" }}>{item.subject}</Text>




                            </View>
                        </TouchableOpacity>


                    )
                }}
            />

        </View>
    )
}