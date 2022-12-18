import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function Getdata() {

    const fetchData = {
        "categories": [
            {
                "id": "43",
                "name": "Rent",
                "timestamp": "2022-11-17 13:02:58",
                "updated_timestamp": "2022-11-17 13:02:58",
                "main_category": [
                    {
                        "id": "59",
                        "name": "Residential",
                        "cat_id": "43",
                        "timestamp": "2022-11-17 13:12:30",
                        "updated_timestamp": "2022-11-17 13:12:30",
                        "sub_category": [
                            {
                                "id": "20",
                                "name": "Towers",
                                "cat_id": "43",
                                "main_cat_id": "59",
                                "timestamp": "2022-11-17 13:13:30",
                                "updated_timestamp": "2022-11-17 13:13:30"
                            },
                            {
                                "id": "21",
                                "name": "Houses",
                                "cat_id": "43",
                                "main_cat_id": "59",
                                "timestamp": "2022-11-17 13:13:34",
                                "updated_timestamp": "2022-11-17 13:13:34"
                            },
                            {
                                "id": "22",
                                "name": "Flats",
                                "cat_id": "43",
                                "main_cat_id": "59",
                                "timestamp": "2022-11-17 13:13:38",
                                "updated_timestamp": "2022-11-17 13:13:38"
                            },
                            {
                                "id": "23",
                                "name": "Furnished Apartments / Flats Villa",
                                "cat_id": "43",
                                "main_cat_id": "59",
                                "timestamp": "2022-11-17 13:13:50",
                                "updated_timestamp": "2022-11-17 13:13:50"
                            },
                            {
                                "id": "24",
                                "name": "Student  Housing",
                                "cat_id": "43",
                                "main_cat_id": "59",
                                "timestamp": "2022-11-17 13:13:56",
                                "updated_timestamp": "2022-11-17 13:13:56"
                            },
                            {
                                "id": "25",
                                "name": "Land",
                                "cat_id": "43",
                                "main_cat_id": "59",
                                "timestamp": "2022-11-17 13:14:03",
                                "updated_timestamp": "2022-11-17 13:14:03"
                            }
                        ]
                    },
                    {
                        "id": "60",
                        "name": "Commercial",
                        "cat_id": "43",
                        "timestamp": "2022-11-17 13:12:36",
                        "updated_timestamp": "2022-11-17 13:12:36",
                        "sub_category": [
                            {
                                "id": "26",
                                "name": "Office Space",
                                "cat_id": "43",
                                "main_cat_id": "60",
                                "timestamp": "2022-11-17 13:21:55",
                                "updated_timestamp": "2022-11-17 13:21:55"
                            },
                            {
                                "id": "27",
                                "name": "Shops",
                                "cat_id": "43",
                                "main_cat_id": "60",
                                "timestamp": "2022-11-17 13:21:59",
                                "updated_timestamp": "2022-11-17 13:21:59"
                            },
                            {
                                "id": "28",
                                "name": "Warehouses",
                                "cat_id": "43",
                                "main_cat_id": "60",
                                "timestamp": "2022-11-17 13:22:03",
                                "updated_timestamp": "2022-11-17 13:22:03"
                            },
                            {
                                "id": "29",
                                "name": "Factories",
                                "cat_id": "43",
                                "main_cat_id": "60",
                                "timestamp": "2022-11-17 13:22:08",
                                "updated_timestamp": "2022-11-17 13:22:08"
                            },
                            {
                                "id": "30",
                                "name": "Festival Halls",
                                "cat_id": "43",
                                "main_cat_id": "60",
                                "timestamp": "2022-11-17 13:22:12",
                                "updated_timestamp": "2022-11-17 13:22:12"
                            },
                            {
                                "id": "31",
                                "name": "Festival Halls",
                                "cat_id": "43",
                                "main_cat_id": "60",
                                "timestamp": "2022-11-17 13:22:20",
                                "updated_timestamp": "2022-11-17 13:22:20"
                            },
                            {
                                "id": "32",
                                "name": "Play yards",
                                "cat_id": "43",
                                "main_cat_id": "60",
                                "timestamp": "2022-11-17 13:22:29",
                                "updated_timestamp": "2022-11-17 13:22:29"
                            },
                            {
                                "id": "33",
                                "name": "projects",
                                "cat_id": "43",
                                "main_cat_id": "60",
                                "timestamp": "2022-11-17 13:22:34",
                                "updated_timestamp": "2022-11-17 13:22:34"
                            }
                        ]
                    },
                    {
                        "id": "61",
                        "name": "Agricultural",
                        "cat_id": "43",
                        "timestamp": "2022-11-17 13:12:43",
                        "updated_timestamp": "2022-11-17 13:12:43",
                        "sub_category": [
                            {
                                "id": "34",
                                "name": "Farms",
                                "cat_id": "43",
                                "main_cat_id": "61",
                                "timestamp": "2022-11-17 13:22:46",
                                "updated_timestamp": "2022-11-17 13:22:46"
                            },
                            {
                                "id": "35",
                                "name": "Agriculture Projects",
                                "cat_id": "43",
                                "main_cat_id": "61",
                                "timestamp": "2022-11-17 13:22:50",
                                "updated_timestamp": "2022-11-17 13:22:50"
                            }
                        ]
                    },
                    {
                        "id": "62",
                        "name": "Entertainments & Sports",
                        "cat_id": "43",
                        "timestamp": "2022-11-17 13:12:48",
                        "updated_timestamp": "2022-11-17 13:12:48",
                        "sub_category": [
                            {
                                "id": "36",
                                "name": "Play yards",
                                "cat_id": "43",
                                "main_cat_id": "62",
                                "timestamp": "2022-11-17 13:23:14",
                                "updated_timestamp": "2022-11-17 13:23:14"
                            },
                            {
                                "id": "37",
                                "name": "Kids play area",
                                "cat_id": "43",
                                "main_cat_id": "62",
                                "timestamp": "2022-11-17 13:24:34",
                                "updated_timestamp": "2022-11-17 13:24:34"
                            },
                            {
                                "id": "38",
                                "name": "Swimming pool",
                                "cat_id": "43",
                                "main_cat_id": "62",
                                "timestamp": "2022-11-17 13:24:43",
                                "updated_timestamp": "2022-11-17 13:24:43"
                            },
                            {
                                "id": "39",
                                "name": "Gym",
                                "cat_id": "43",
                                "main_cat_id": "62",
                                "timestamp": "2022-11-17 13:24:50",
                                "updated_timestamp": "2022-11-17 13:24:50"
                            },
                            {
                                "id": "40",
                                "name": "Golf  yards",
                                "cat_id": "43",
                                "main_cat_id": "62",
                                "timestamp": "2022-11-17 13:24:56",
                                "updated_timestamp": "2022-11-17 13:24:56"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "44",
                "name": "Sale",
                "timestamp": "2022-11-17 13:03:05",
                "updated_timestamp": "2022-11-17 13:03:05",
                "main_category": [
                    {
                        "id": "63",
                        "name": "Residential",
                        "cat_id": "44",
                        "timestamp": "2022-11-17 13:13:05",
                        "updated_timestamp": "2022-11-17 13:13:05",
                        "sub_category": [
                            {
                                "id": "41",
                                "name": "Towers",
                                "cat_id": "44",
                                "main_cat_id": "63",
                                "timestamp": "2022-11-17 13:25:15",
                                "updated_timestamp": "2022-11-17 13:25:15"
                            },
                            {
                                "id": "42",
                                "name": "Houses",
                                "cat_id": "44",
                                "main_cat_id": "63",
                                "timestamp": "2022-11-17 13:25:19",
                                "updated_timestamp": "2022-11-17 13:25:19"
                            },
                            {
                                "id": "43",
                                "name": "Flats",
                                "cat_id": "44",
                                "main_cat_id": "63",
                                "timestamp": "2022-11-17 13:25:24",
                                "updated_timestamp": "2022-11-17 13:25:24"
                            },
                            {
                                "id": "44",
                                "name": "Villa",
                                "cat_id": "44",
                                "main_cat_id": "63",
                                "timestamp": "2022-11-17 13:25:28",
                                "updated_timestamp": "2022-11-17 13:25:28"
                            },
                            {
                                "id": "45",
                                "name": "Land",
                                "cat_id": "44",
                                "main_cat_id": "63",
                                "timestamp": "2022-11-17 13:25:32",
                                "updated_timestamp": "2022-11-17 13:25:32"
                            }
                        ]
                    },
                    {
                        "id": "64",
                        "name": "Commercial",
                        "cat_id": "44",
                        "timestamp": "2022-11-17 13:13:10",
                        "updated_timestamp": "2022-11-17 13:13:10",
                        "sub_category": [
                            {
                                "id": "46",
                                "name": "( Office",
                                "cat_id": "44",
                                "main_cat_id": "64",
                                "timestamp": "2022-11-17 13:25:40",
                                "updated_timestamp": "2022-11-17 13:25:40"
                            },
                            {
                                "id": "47",
                                "name": "Office Space",
                                "cat_id": "44",
                                "main_cat_id": "64",
                                "timestamp": "2022-11-17 13:25:46",
                                "updated_timestamp": "2022-11-17 13:25:46"
                            },
                            {
                                "id": "48",
                                "name": "Shops",
                                "cat_id": "44",
                                "main_cat_id": "64",
                                "timestamp": "2022-11-17 13:25:52",
                                "updated_timestamp": "2022-11-17 13:25:52"
                            },
                            {
                                "id": "49",
                                "name": "Warehouses",
                                "cat_id": "44",
                                "main_cat_id": "64",
                                "timestamp": "2022-11-17 13:25:57",
                                "updated_timestamp": "2022-11-17 13:25:57"
                            },
                            {
                                "id": "50",
                                "name": "Factories",
                                "cat_id": "44",
                                "main_cat_id": "64",
                                "timestamp": "2022-11-17 13:26:02",
                                "updated_timestamp": "2022-11-17 13:26:02"
                            },
                            {
                                "id": "51",
                                "name": "projects",
                                "cat_id": "44",
                                "main_cat_id": "64",
                                "timestamp": "2022-11-17 13:26:06",
                                "updated_timestamp": "2022-11-17 13:26:06"
                            }
                        ]
                    },
                    {
                        "id": "65",
                        "name": "Agricultural",
                        "cat_id": "44",
                        "timestamp": "2022-11-17 13:13:14",
                        "updated_timestamp": "2022-11-17 13:13:14",
                        "sub_category": [
                            {
                                "id": "52",
                                "name": "Farms",
                                "cat_id": "44",
                                "main_cat_id": "65",
                                "timestamp": "2022-11-17 13:26:21",
                                "updated_timestamp": "2022-11-17 13:26:21"
                            },
                            {
                                "id": "53",
                                "name": "Agriculture Projects",
                                "cat_id": "44",
                                "main_cat_id": "65",
                                "timestamp": "2022-11-17 13:26:27",
                                "updated_timestamp": "2022-11-17 13:26:27"
                            }
                        ]
                    }
                ]
            }
        ]
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {
                    fetchData.categories.map((item, index) => <View style={{ margin: 30 }} key={index}>
                        <Text style={{ backgroundColor: "red" }}>{item.id}</Text>

                        {
                            item.main_category ? item.main_category.map((neitem) => <View style={{}}>
                                <Text style={{ marginLeft: 20, backgroundColor: "yellow" }}>{neitem.name}</Text>
                                {
                                    neitem.sub_category.map((sbcat) => <View>
                                        <Text style={{ marginLeft: 40, backgroundColor: "pink" }}>
                                            {sbcat.name}
                                        </Text>
                                    </View>)
                                }

                            </View>) : null
                        }
                    </View>)
                }
            </ScrollView>
        </View>
    )
}