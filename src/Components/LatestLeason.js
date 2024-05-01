import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,Image } from 'react-native'
import React from 'react'


const LatestLeason = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.textHead}>Amasomo aheruka</Text>
                <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.textLink}>Ayandi</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.leasons}>
                <TouchableOpacity style={styles.leason}>
                    <View style={styles.imageCover}>
                    <Image
                        source={require('../../assets/images/icyapa1.png')} 
                        style={styles.imageBackground} 
                        />

                
                        </View>
                    <View>
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
                    <View>
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
        paddingTop: 40,
        display: 'flex',
        flexDirection: "column",
        gap: 10
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    textHead: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: "Jost-medium" 
    },
    textLink: {
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
     
        padding: 10,
        paddingTop: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        borderRadius: 12,
        backgroundColor:'#FFFAF2'
    },
    imageBackground: {
        width:'100%',
        height: 130,  
        top: 0,
        borderRadius:8,
        
    },
    imageCover:{
        width:'100%',
        height:130,
    
    }
})

export default LatestLeason
