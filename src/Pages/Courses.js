import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, FlatList } from 'react-native'
import React from 'react'
import { Svg, Path } from 'react-native-svg'

import CardLesson from '../Components/CardLesson'



const Courses = ({navigation}) => {
    const numColumns = 2
    const data = [
        {
            id:1,
            imageUrl: <Image source={require('../../assets/images/icyapa1.png')} style={{width:"100%",height:150,borderTopRightRadius:10,borderTopLeftRadius:10}} />,
            title: "Ibyapa",
            description: "Non magna iaculis nisl"
        },
        {
            id:2,
            imageUrl: <Image source={require('../../assets/images/icyapa1.png')} style={{width:"100%",height:150,borderTopRightRadius:10,borderTopLeftRadius:10}} />,
            title: "Ibyapa",
            description: "Non magna iaculis nisl"
        },
        {
            id:3,
            imageUrl: <Image source={require('../../assets/images/icyapa1.png')} style={{width:"100%",height:150,borderTopRightRadius:10,borderTopLeftRadius:10}} />,
            title: "Ibyapa",
            description: "Non magna iaculis nisl"
        },
        {
            id:4,
            imageUrl: <Image source={require('../../assets/images/icyapa1.png')} style={{width:"100%",height:150,borderTopRightRadius:10,borderTopLeftRadius:10}} />,
            title: "Ibyapa",
            description: "Non magna iaculis nisl"
        },
    ]
    return (
        <View style={styles.container}>
        <View style={{ position: 'absolute',}}>
                  <Image source={require('../../assets/images/header.png')} style={{width:400,height:200}} />
                </View>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={()=>navigation.goBack()}>
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M16.0303 4.46967C16.2966 4.73594 16.3208 5.1526 16.1029 5.44621L16.0303 5.53033L9.561 12L16.0303 18.4697C16.2966 18.7359 16.3208 19.1526 16.1029 19.4462L16.0303 19.5303C15.7641 19.7966 15.3474 19.8208 15.0538 19.6029L14.9697 19.5303L7.96967 12.5303C7.7034 12.2641 7.6792 11.8474 7.89705 11.5538L7.96967 11.4697L14.9697 4.46967C15.2626 4.17678 15.7374 4.17678 16.0303 4.46967Z" fill="white" />
                    </Svg>

                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 20, fontFamily: "Jost-medium",color:'white' }}>Amasomo</Text>
                </View>
                <View></View>

            </View>

            <View style={styles.courses}>
             
             <FlatList
             data={data}
             numColumns={numColumns}
             renderItem={CardLesson}
             keyExtractor={(item)=> item.id}
             contentContainerStyle={{alignItems:'center',gap:20,paddingHorizontal:20,rowGap:20}}
             />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF9F00',
        paddingTop: 20
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 20
    },
    back: {
        padding: 14,
        backgroundColor: '#FFC159',
        borderRadius: 14

    },
    courses: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        paddingTop: 40,
        paddingRight:4,
        backgroundColor: 'white',
        flex: 1,
        borderTopEndRadius:20,
        borderTopStartRadius:20,

    },
    leftCourses: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10

    },
    RightCourses: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10

    },
    name: {
        backgroundColor: 'black',
        width: "80%",
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        opacity: 0.6,
        borderRadius: 8
    },

})

export default Courses