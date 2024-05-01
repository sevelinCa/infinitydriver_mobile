import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { BlurView } from "expo-blur"


const Courses = () => {
    return (
        <View style={styles.container}>
            <View style={{ position: 'absolute', left: 0 }}>

                <Svg width="208" height="199" viewBox="0 0 208 199" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M208 0H180V199H208V0Z" fill="#FFAC24" />
                    <Path d="M0 0H165V199H0V0Z" fill="#FFAC24" />
                </Svg>
            </View>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back}>
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M16.0303 4.46967C16.2966 4.73594 16.3208 5.1526 16.1029 5.44621L16.0303 5.53033L9.561 12L16.0303 18.4697C16.2966 18.7359 16.3208 19.1526 16.1029 19.4462L16.0303 19.5303C15.7641 19.7966 15.3474 19.8208 15.0538 19.6029L14.9697 19.5303L7.96967 12.5303C7.7034 12.2641 7.6792 11.8474 7.89705 11.5538L7.96967 11.4697L14.9697 4.46967C15.2626 4.17678 15.7374 4.17678 16.0303 4.46967Z" fill="white" />
                    </Svg>

                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 20, fontFamily: "Jost-bold" }}>Courses</Text>
                </View>
                <View></View>

            </View>

            <View style={styles.courses}>
                <View style={styles.leftCourses}>
                    <TouchableOpacity style={styles.leftTop}>
                        <ImageBackground source={require('../../assets/images/icyapa1.png')} style={{ height: 250, width: "100%", borderRadius: 30, display: "flex", alignItems: "center", justifyContent: 'flex-end', paddingBottom: 10 }}>
                        <View style={styles.name}>
                                <Text style={{ color: "white" }}>Ibyapa</Text>
                            </View>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.leftTop}>
                        <ImageBackground source={require('../../assets/images/icyapa1.png')} style={{ height: 200, width: "100%", borderRadius: 30, display: "flex", alignItems: "center", justifyContent: 'flex-end', paddingBottom: 10 }}>
                            <View style={styles.name}>
                                <Text style={{ color: "white" }}>Ibyapa</Text>
                            </View>

                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.RightCourses}>
                    <TouchableOpacity style={styles.leftTop}>
                        <ImageBackground source={require('../../assets/images/icyapa1.png')} style={{ height: 200, width: "100%", borderRadius: 30, display: "flex", alignItems: "center", justifyContent: 'flex-end', paddingBottom: 10 }}>
                            <View style={styles.name}>
                                <Text style={{ color: "white" }}>Ibyapa</Text>
                            </View>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.leftTop}>
                        <ImageBackground source={require('../../assets/images/icyapa1.png')} style={{ height: 250, width: "100%", borderRadius: 30, display: "flex", alignItems: "center", justifyContent: 'flex-end', paddingBottom: 10 }}>
                            <View style={styles.name}>
                                <Text style={{ color: "white" }}>Ibyapa</Text>
                            </View>

                        </ImageBackground>
                    </TouchableOpacity>
                </View>

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
        padding: 40,
        backgroundColor: 'white',
        flex: 1,

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