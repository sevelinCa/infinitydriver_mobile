import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,Image } from 'react-native'
import React from 'react'


const LatestLeason = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.textHead}>Amasomo aheruka</Text>
                <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.textLink}>Reba Yose</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.leasons}>
                <TouchableOpacity onPress={()=> navigation.navigate('Category')} style={styles.leason}>
                    <View style={styles.imageCover}>
                    <Image
                        source={require('../../assets/images/icyapa1.png')} 
                        style={styles.imageBackground} 
                        />
                        </View>
                    <View style={styles.content}>
                        <Text style={{ fontSize: 20, fontWeight: "600",fontFamily: "Jost-medium"  }}>Ibyapa</Text>
                        <Text style={{ fontSize: 14, fontWeight: "400",fontFamily: "Jost-regular" }}>Ibyapa bitegeka bitegeka/ngoboka</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.leason}>
                    <View style={styles.imageCover}>
                    <Image
                        source={require('../../assets/images/icyapa2.png')} 
                        style={styles.imageBackground} 
                        />

                
                        </View>
                    <View style={styles.content}>
                        <Text style={{ fontSize: 20, fontWeight: "600",fontFamily: "Jost-medium"  }}>Igazeti</Text>
                        <Text style={{ fontSize: 14, fontWeight: "400",fontFamily: "Jost-regular" }}>Ibyapa bitegeka bitegeka/ngoboka</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 10,
        display: 'flex',
        flexDirection: "column",
        gap: 10
    },
    content:{
        padding:10,
    

    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        width: '100%',

    },
    textHead: {
        fontSize:18,
       fontFamily:'Jost-regular'
    },
    textLink: {
        fontSize: 16,
        color: '#F7B733',
        fontFamily: "Jost-medium" 
    },
    leasons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        gap: 10
    },
    leason: {
        width: "50%",
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        backgroundColor:'#FFF4E0'
    },
    imageBackground: {
        width:'100%',
        height: 130,  
        top: 0,
    },
    imageCover:{
        width:'100%',
        height:130,
    
    }
})

export default LatestLeason
