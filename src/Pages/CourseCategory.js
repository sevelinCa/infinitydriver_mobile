import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { BlurView } from "expo-blur"


const CoursesCategory = ({navigation}) => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={()=>navigation.goBack()}>
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M16.0303 4.46967C16.2966 4.73594 16.3208 5.1526 16.1029 5.44621L16.0303 5.53033L9.561 12L16.0303 18.4697C16.2966 18.7359 16.3208 19.1526 16.1029 19.4462L16.0303 19.5303C15.7641 19.7966 15.3474 19.8208 15.0538 19.6029L14.9697 19.5303L7.96967 12.5303C7.7034 12.2641 7.6792 11.8474 7.89705 11.5538L7.96967 11.4697L14.9697 4.46967C15.2626 4.17678 15.7374 4.17678 16.0303 4.46967Z" fill="black" />
                    </Svg>


                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 20, fontFamily: "Jost-medium" }}>Ibyapa</Text>
                </View>
                <View></View>

            </View>
            <View style={styles.categories}>
                <TouchableOpacity style={styles.category}>
                    <View style={styles.iconContain}>
                    <Image source={require('../../assets/images/stop.png')} style={{height:40,width:40,objectFit:"contain"}}/>

                    </View>
                    <Text style={{fontSize:16,fontFamily:'Jost-medium'}}>Ibyapa Bibuza</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <View style={styles.iconContain}>
                    <Image source={require('../../assets/images/warn.png')} style={{height:40,width:40,objectFit:"contain"}}/>

                    </View>
                    <Text style={{fontSize:16,fontFamily:'Jost-medium'}}>Ibyapa Bibuza</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <View style={styles.iconContain}>
                    <Image source={require('../../assets/images/stop.png')} style={{height:40,width:40,objectFit:"contain"}}/>

                    </View>
                    <Text style={{fontSize:16,fontFamily:'Jost-medium'}}>Ibyapa Bibuza</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingTop: 20,
        
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
        backgroundColor: '#FFFAF2',
        borderRadius: 14,
        borderWidth: 1,
        borderColor:'#EEEEEE'

    },
    categories: {
        display: 'flex',
        flexDirection:'column',
        gap: 10,
        padding: 20,
        backgroundColor: 'white',
        flex: 1,

    },
    category:{
        padding:10,
        borderWidth:1,
        borderStyle:'solid',
        borderColor: '#EEEEEE',
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        backgroundColor:'#FFFAF2',
        borderRadius:12
    },
    iconContain:{
        padding:10,
        paddingHorizontal:20,
        backgroundColor: '#FFECCC',
        borderRadius:12
    }


})

export default CoursesCategory