import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, FlatList, Image, ImageBackground, ActivityIndicator, Button } from 'react-native';
// import StyleSheet from '../../assets/css/style'
// import MyContainer from '../../components/MainComponents/MyContainer';
// import { MainButton } from "../../components/MainComponents/MainButton";
// import { images } from "../../constraints";
// import { SignupProgressBar } from "../../components/MainComponents/SignupProgressBar";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { showToast } from '../../components/General';
// import { dataGet } from '../../common/apiData';
// import { colors } from "../../constraints";
import Ioniccheckmark from 'react-native-vector-icons/Ionicons';

let countData = 1
let foodData = [{ id: 1, name: 'Asian' }]
let data = []
export default Clikscreen = () => {

  const [Foods, setFoods] = useState([])
  const [selected, SetSelected] = useState([])
  const [selectedFood, setSelectedFood] = useState(false)
  useEffect(() => {
    let data = [{ id: 1, name: 'Asian', svgName: require('../assests/chicken.jpg'), checked: true },
    { id: 2, name: 'Burger', svgName: require('../assests/pizza.jpg'), checked: false },
    { id: 3, name: 'Healthy Food', svgName: require('../assests/pizza.jpg'), checked: false },
    { id: 4, name: 'Pizza', svgName: require('../assests/chicken.jpg'), checked: false },
    { id: 5, name: 'Ramen', svgName: require('../assests/pizza.jpg'), checked: false },
    { id: 6, name: 'Chicken', svgName: require('../assests/chicken.jpg'), checked: false },
    ]


    setFoods(data)
    // console.log(Foods);
    SetSelected(1)

    setSelectedFood(foodData)
    console.log(selectedFood);
  
  }, [])

  const checkFood = async (name, index, check, id) => {
    console.log(name)
    Foods[index].checked = !check
    const copy = [...Foods]
    // setFoods(copy)
    // console.log(copy);


    const found = foodData.some(ite => ite.name === name);

    // console.log(found);

    let indexFound = foodData.findIndex(x => x.name === name);

    if (!found) {
      foodData.push({ id: id, name: name });
      countData = parseInt(countData) + 1
      SetSelected(countData)
    }
    else {
      foodData.splice(indexFound, 1);
      countData = parseInt(countData) - 1
      SetSelected(countData)
    }
    setSelectedFood(foodData)
  }



  return (
    <View style={[]}>
      {/* <MyContainer {...props} step='Step 2' noSetting={true}/> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <SignupProgressBar value={0.5}/> */}
        {/* <Text style={StyleSheet.signupHeading}>What’s your favorite food?</Text>
        <Text style={}>This will help us give you recommendation</Text> */}
        <View style={{ marginTop: 20 }}></View>

        <FlatList
          data={Foods}
          horizontal={false}
          numColumns={2}

          extraData={Foods}
          renderItem={({ item, index }) => (
            <View style={{ width: '46%', marginHorizontal: '2%', marginTop: 10 }}>
              <TouchableOpacity style={{}} activeOpacity={0.8} onPress={() => checkFood(item.name, index, item.checked, item.id)}>
                <ImageBackground source={item.svgName}
                  style={{ width: '100%', height: 150, justifyContent: "center" }}
                  imageStyle={{ borderRadius: 8 }}
                >
                  {
                    item.checked == true ?
                      <View>
                        <Ioniccheckmark style={{ alignSelf: "center" }} name="checkmark-circle" size={25} color="blue" />

                      </View>
                      : null}
                </ImageBackground>
                <Text style={{ textAlign: "center" }}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )} />

        <View >

          <Button title={`${countData} Selected`} />


        </View>
      </ScrollView>

    </View>
  )
}

