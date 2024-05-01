import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { Svg, Path } from 'react-native-svg'
import LatestLeason from '../Components/LatestLeason'
import Servises from '../Components/Servises'


const Home = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ position: 'absolute', left: 0 }}>

                    <Svg width="208" height="199" viewBox="0 0 208 199" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M208 0H180V199H208V0Z" fill="#FFAC24" />
                        <Path d="M0 0H165V199H0V0Z" fill="#FFAC24" />
                    </Svg>
                </View>

                <View style={styles.headerHead}>


                    <Image source={require('../../assets/images/logo.png')} style={{ width: 140, objectFit: 'contain' }} />

                    <View style={styles.icon}>
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.3242 20.106C10.8422 20.683 11.5072 21 12.1972 21H12.1982C12.8912 21 13.5592 20.683 14.0782 20.105C14.3562 19.798 14.8302 19.773 15.1372 20.05C15.4452 20.327 15.4702 20.802 15.1932 21.109C14.3852 22.006 13.3222 22.5 12.1982 22.5H12.1962C11.0752 22.499 10.0142 22.005 9.20923 21.108C8.93223 20.801 8.95723 20.326 9.26523 20.05C9.57323 19.772 10.0472 19.797 10.3242 20.106ZM12.247 1C16.692 1 19.678 4.462 19.678 7.695C19.678 9.358 20.101 10.063 20.55 10.811C20.994 11.549 21.497 12.387 21.497 13.971C21.148 18.018 16.923 18.348 12.247 18.348C7.57103 18.348 3.34503 18.018 3.00001 14.035C2.99703 12.387 3.50003 11.549 3.94403 10.811L4.10077 10.5472C4.4867 9.88386 4.81603 9.16235 4.81603 7.695C4.81603 4.462 7.80203 1 12.247 1ZM12.247 2.5C8.75203 2.5 6.31603 5.238 6.31603 7.695C6.31603 9.774 5.73903 10.735 5.22903 11.583C4.82003 12.264 4.49703 12.802 4.49703 13.971C4.66403 15.857 5.90903 16.848 12.247 16.848C18.55 16.848 19.834 15.813 20 13.906C19.997 12.802 19.674 12.264 19.265 11.583C18.755 10.735 18.178 9.774 18.178 7.695C18.178 5.238 15.742 2.5 12.247 2.5Z" fill="white" />
                        </Svg>

                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.9847 15.3462C8.11707 15.3462 4.81421 15.931 4.81421 18.2729C4.81421 20.6148 8.09611 21.2205 11.9847 21.2205C15.8523 21.2205 19.1542 20.6348 19.1542 18.2938C19.1542 15.9529 15.8733 15.3462 11.9847 15.3462Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <Path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M11.9847 12.0059C14.5228 12.0059 16.5799 9.94782 16.5799 7.40972C16.5799 4.87163 14.5228 2.81448 11.9847 2.81448C9.44658 2.81448 7.38845 4.87163 7.38845 7.40972C7.37991 9.93925 9.42372 11.9973 11.9523 12.0059H11.9847Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </Svg>

                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 14 }}>

                <View style={styles.search}>
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.739 2C17.109 2 21.477 6.368 21.477 11.738C21.477 14.2715 20.5047 16.5823 18.9136 18.3165L22.0444 21.4407C22.3374 21.7337 22.3384 22.2077 22.0454 22.5007C21.8994 22.6487 21.7064 22.7217 21.5144 22.7217C21.3234 22.7217 21.1314 22.6487 20.9844 22.5027L17.8159 19.343C16.1491 20.6778 14.0357 21.477 11.739 21.477C6.369 21.477 2 17.108 2 11.738C2 6.368 6.369 2 11.739 2ZM11.739 3.5C7.196 3.5 3.5 7.195 3.5 11.738C3.5 16.281 7.196 19.977 11.739 19.977C16.281 19.977 19.977 16.281 19.977 11.738C19.977 7.195 16.281 3.5 11.739 3.5Z" fill="#FFF0D8" />
                    </Svg>


                    <TextInput placeholder='Search something' placeholderTextColor='white' style={[styles.input, {}]} />

                </View>
            </View>
            <LatestLeason />
            <Servises/>
        </View>
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
        height: 150,
        gap: 20,
        position: 'relative',
        overflow: 'hidden'
    },
    headerHead: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },

    icon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        gap: 10
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