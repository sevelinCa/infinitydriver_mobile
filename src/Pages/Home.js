import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'
import { Svg, Path } from 'react-native-svg'
import LatestLeason from '../Components/LatestLeason'
import Servises from '../Components/Servises'
import { StatusBar } from 'expo-status-bar'
import AyoWakoze from '../Components/AyoWakoze'


const Home = ({navigation}) => {

    return (
        <ScrollView>
            <StatusBar backgroundColor='#FF9F00' style='light' />
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ position: 'absolute',}}>
                  <Image source={require('../../assets/images/header.png')} style={{width:400,height:200}} />
                </View>

                <View style={styles.headerHead}>


                <View style={styles.profile}>
                    <Text style={styles.heloText}>Good Afternoon</Text>
                    <Text style={styles.names}>JAMES R</Text>

                </View>

                    <View style={styles.icon}>

                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.3242 20.106C10.8422 20.683 11.5072 21 12.1972 21H12.1982C12.8912 21 13.5592 20.683 14.0782 20.105C14.3562 19.798 14.8302 19.773 15.1372 20.05C15.4452 20.327 15.4702 20.802 15.1932 21.109C14.3852 22.006 13.3222 22.5 12.1982 22.5H12.1962C11.0752 22.499 10.0142 22.005 9.20923 21.108C8.93223 20.801 8.95723 20.326 9.26523 20.05C9.57323 19.772 10.0472 19.797 10.3242 20.106ZM12.247 1C16.692 1 19.678 4.462 19.678 7.695C19.678 9.358 20.101 10.063 20.55 10.811C20.994 11.549 21.497 12.387 21.497 13.971C21.148 18.018 16.923 18.348 12.247 18.348C7.57103 18.348 3.34503 18.018 3.00001 14.035C2.99703 12.387 3.50003 11.549 3.94403 10.811L4.10077 10.5472C4.4867 9.88386 4.81603 9.16235 4.81603 7.695C4.81603 4.462 7.80203 1 12.247 1ZM12.247 2.5C8.75203 2.5 6.31603 5.238 6.31603 7.695C6.31603 9.774 5.73903 10.735 5.22903 11.583C4.82003 12.264 4.49703 12.802 4.49703 13.971C4.66403 15.857 5.90903 16.848 12.247 16.848C18.55 16.848 19.834 15.813 20 13.906C19.997 12.802 19.674 12.264 19.265 11.583C18.755 10.735 18.178 9.774 18.178 7.695C18.178 5.238 15.742 2.5 12.247 2.5Z" fill="white" />
                        </Svg>
                    </View>
                </View>
            </View>
     

     
            <LatestLeason  navigation={navigation}/>
            <Servises navigation={navigation}/>
            <AyoWakoze navigation={navigation}/>
           
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        padding: 20,
        display: 'flex',
        backgroundColor: '#FF9F00',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 120,
        gap: 20,
        position: 'relative',
        overflow: 'hidden'
    },
    headerHead: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingTop: 20
    },
    heloText:{
        fontSize:16,
        color: 'white'
    },
    names:{
        fontSize: 24,
        fontWeight: '800',
        color: 'white'

    },

    icon: {
        display: 'flex',
        padding:10,
        backgroundColor:'#FFC159',
        alignItems: "center",
        gap: 10,
        borderRadius:10
    },
    iconCircle: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        opacity: 2,
        borderRadius: 20
    },
    search: {
        width: '100%',
        backgroundColor: '#FDBF58',
        padding: 16,

        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        marginTop: -30


    },
    input: {
        width: '100%',
        height: '100%',
        color: 'white',
        fontSize: 18,
        fontFamily: "Jost-medium"

    }

})

export default Home