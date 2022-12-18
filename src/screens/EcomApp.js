import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductDetail from './ProductDetail';
import AddToCart from './AddToCart';

export default function EcomApp({ navigation }) {

    const [list, setList] = useState([])
    const [dta, setDta] = useState([]);


    const [cont, setCont] = useState(1)


    const getArticlesFromApi = async () => {
        try {
            let response = await fetch('https://fakestoreapi.com/products?limit=5');
            let json = await response.json();
            console.log(json);
            setDta(json)
        } catch (error) {
            console.error(error);
        }
    };


    const addclk = (item) => {

        setList([...list, item])

    }

    console.log("listaaa", list);


    useEffect(() => {
        getArticlesFromApi()
    }, [])


    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate("AddToCart", {

                updt: list,
                newcont:cont
            })}>
                <View style={{ marginTop: 10, height: 60, width: "90%", backgroundColor: "red", borderRadius: 15, justifyContent: "center", alignSelf: "center" }}>
                    <Text style={{ alignSelf: "center", color: "white", fontSize: 20 }}>Cart</Text>
                </View>
            </TouchableOpacity>


            <FlatList style={{ alignSelf: "center" }}
                data={dta}
                numColumns={2}
                keyExtractor={(item, index) => item}
                renderItem={({ item, index }) => (
                    <View style={{ padding: 5 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {
                            title: item.title,
                            pric: item.price,
                            imgg: item.image,
                            updt: list
                            // lst: list

                        })}>
                            <View style={{ justifyContent: "center", height: 310, width: 164, backgroundColor: "white", borderColor: "#181725", borderWidth: 0.5, borderRadius: 20 }}>

                                <Image style={{ alignSelf: "center", height: 80, width: 80 }} source={{ uri: item.image }} />
                                <Text style={{ marginTop: 10, fontSize: 18, color: "black", marginHorizontal: 10 }}>{item.title}</Text>
                                <Text style={{ marginLeft: 10, fontSize: 14 }}>3pcs Priceg</Text>
                                <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
                                    <Text style={{ fontSize: 16, color: "black" }}>{item.price}</Text>


                                    <TouchableOpacity>

                                        <TouchableOpacity onPress={() => addclk(item)}>
                                            <View style={{ height: 40, width: 40, borderRadius: 13, backgroundColor: "#53B175", justifyContent: "center" }}>
                                                <Text style={{ alignSelf: "center", fontSize: 25, color: "white" }}>+</Text>

                                            </View>
                                        </TouchableOpacity>

                                    </TouchableOpacity>
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}