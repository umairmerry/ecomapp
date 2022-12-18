// import { View, Text, Image, TouchableOpacity, ListViewBase } from 'react-native'
// import React, { useEffect, useState } from 'react'
// export default function AddToCart({ route }) {

//     let { lsta } = route.params;


//     const [del, setDel] = useState(lsta);


//     console.log(del,"hhhh");




//     const remv = (index) => {
//         const deleteDdata = del.splice(index,1)
//         setDel(...del)

//     }
//     // console.log(del, "del")

//     return (
//         <View>

//             {/* <Text>hjjbjb</Text> */}
//             {
//                 lsta.map((item, index) => <View key={index}>
//                     <View style={{ height: 150, width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
//                         <View style={{ marginLeft: 7, marginTop: 10 }}>
//                             <Image style={{ height: 100, width: 80, borderRadius: 10 }} source={require('../assests/chicken.jpg')} />

//                         </View>
//                         <View style={{ flexDirection: "row", marginRight: 13 }}>
//                             <View style={{ marginRight: 20 }}>

//                                 <Text style={{ color: "black", fontSize: 18, width: 160 }}>{item.title}</Text>

//                                 <Text style={{ color: "black", fontSize: 18, color: "grey", fontWeight: 'bold' }}>{item.price}</Text>
//                             </View>

//                             <View >
//                                 <View >
//                                     <TouchableOpacity onPress={() => remv(index)}>
//                                         <Text style={{ alignSelf: "flex-end", fontSize: 18, fontWeight: "bold" }}>x</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                                 <View style={{ flexDirection: "row", marginTop: 30 }}>
//                                     <TouchableOpacity >
//                                         <Text style={{ fontSize: 50, color: "black", fontWeight: "bold" }}>-</Text>
//                                     </TouchableOpacity>
//                                     <Text style={{ marginLeft: 10, width: 30, marginTop: 25 }}>01</Text>
//                                     <TouchableOpacity>
//                                         <Text style={{ fontSize: 30, color: "black", fontWeight: "bold", marginTop: 15 }}>+</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                 </View>)
//             }


//         </View>
//     )
// }


import { View, Text, ImageBackground, TouchableOpacity, Button, Image } from 'react-native'
import React, { useState } from 'react'

export default function AddToCart({ route }) {
    let { updt, newcount, newvlu,newpric,newcont } = route.params;


    const [del, setDel] = useState(updt);

    const [countt, setCountt] = useState(newcount)
    const [valuu, setValuu] = useState(newvlu)

  



    const remv = (index) => {
        const upload = del.filter((item, i) => {
            console.log(i);
            return index != i
        })
        setDel(upload)
    }

    const incrihandle = () => {
        const add = parseInt(countt) + 1
        setCountt(add)


        setValuu(parseInt(valuu) + parseFloat(newpric))

    }

    // const IncreHandle = (indd, prcc) => {

    //     const nextProducts = [...del];
    //     nextProducts[indd].newcount += 1;
    //     setDel(nextProducts);
    
    //     setValuu(valuu + prcc)
    
    //   }





    return (
        <View>
            <Text>AddToCart</Text>

            {
                del.map((item, index) => <View key={index}>

                    <View style={{ height: 150, width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ marginLeft: 7, marginTop: 10 }}>
                            <Image style={{ height: 100, width: 80, borderRadius: 10 }} source={require('../assests/chicken.jpg')} />

                        </View>
                        <View style={{ flexDirection: "row", marginRight: 13 }}>
                            <View style={{ marginRight: 20 }}>

                                <Text style={{ color: "black", fontSize: 18, width: 160 }}>{item.title}</Text>

                                <Text style={{ color: "black", fontSize: 18, color: "grey", fontWeight: 'bold' }}>{valuu}</Text>
                            </View>

                            <View >
                                <View >
                                    <TouchableOpacity onPress={() => remv(index)}>
                                        <Text style={{ alignSelf: "flex-end", fontSize: 18, fontWeight: "bold" }}>x</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 30 }}>
                                    <TouchableOpacity >
                                        <Text style={{ fontSize: 50, color: "black", fontWeight: "bold" }}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{ marginLeft: 10, width: 30, marginTop: 25 }}>{countt}</Text>
                                    <TouchableOpacity onPress={() =>  incrihandle()}>
                                        <Text style={{ fontSize: 30, color: "black", fontWeight: "bold", marginTop: 15 }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>)
            }
        </View>
    )
}