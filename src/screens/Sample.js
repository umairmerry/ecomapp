import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Sample() {


    const Data = [
        {
            id: 1,
            subject: 'Pizza',
            image: require("../assests/chicken.jpg"),
            selected: true

        },
        {
            id: 2,
            subject: 'Chicken',
            image: require("../assests/chicken.jpg"),
            selected: true
        },
        {
            id: 3,
            subject: 'Chicken',
            image: require("../assests/chicken.jpg"),
            selected: true
        },
        {
            id: 4,
            subject: 'Checken',
            image: require("../assests/chicken.jpg"),
            selected: true
        }
    ]
    const [select, setSelect] = useState(Data);
    const [visible,setVisible]=useState(false)


    const handleOnpress = (index) => {
        console.log(index);
        select[index].selected = true
        setVisible(true)
        

        

        setSelect(select => [...select, select]);
    }
    return (
        <View>
            {
                Data.map((item, index) => <View style={{}} key={index}>

                    {
                        item.selected == true ?

                            <View>
                                <TouchableOpacity onPress={() => handleOnpress(index)}>

                                    <Image style={{
                                        borderWidth: 2,
                                        borderColor: visible ? 'black' : null,
                                        height: 150, width: 150, borderWidth: 3
                                    }} source={item.image} />
                                </TouchableOpacity>
                                <Text>{item.subject}</Text>
                            </View> : null
                    }
                </View>)
            }
        </View>
    )
}