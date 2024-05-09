import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import React from 'react'
import { Path, Svg } from 'react-native-svg'

const AyoWakoze = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={{fontFamily:'Jost-regular'}}>Amasuzuma Wakoze</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#FF9F00' }}>Reba Yose</Text>

                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <TouchableOpacity style={styles.wakoze}>
                    <View style={styles.left}>
                        <View style={styles.icon}>
                            <Svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M13.0968 13.7827H7.08017" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M13.0968 10.2939H7.08017" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M9.37609 6.81323H7.08025" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.2572 2.55466C13.2572 2.55466 6.85967 2.55799 6.84967 2.55799C4.54967 2.57216 3.1255 4.08549 3.1255 6.39382V14.0572C3.1255 16.3772 4.5605 17.8963 6.8805 17.8963C6.8805 17.8963 13.2772 17.8938 13.288 17.8938C15.588 17.8797 17.013 16.3655 17.013 14.0572V6.39382C17.013 4.07382 15.5772 2.55466 13.2572 2.55466Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </Svg>

                        </View>
                        <View style={styles.content}>
                            <Text style={{fontFamily:'Jost-medium',fontSize:16}}>Isuzuma ab</Text>
                            <Text style={{fontSize: 12,color:'gray'}}>14 Points</Text>
                        </View>
                    </View>
                    <View style={styles.right}>
                        <Text style={{fontSize:16,fontFamily:'Jost-bold'}}>14</Text>
                        <Text style={{fontFamily:'Jost-light'}}>Out of 20</Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wakoze}>
                    <View style={styles.left}>
                        <View style={styles.icon}>
                            <Svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M13.0968 13.7827H7.08017" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M13.0968 10.2939H7.08017" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M9.37609 6.81323H7.08025" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.2572 2.55466C13.2572 2.55466 6.85967 2.55799 6.84967 2.55799C4.54967 2.57216 3.1255 4.08549 3.1255 6.39382V14.0572C3.1255 16.3772 4.5605 17.8963 6.8805 17.8963C6.8805 17.8963 13.2772 17.8938 13.288 17.8938C15.588 17.8797 17.013 16.3655 17.013 14.0572V6.39382C17.013 4.07382 15.5772 2.55466 13.2572 2.55466Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </Svg>

                        </View>
                        <View style={styles.content}>
                            <Text style={{fontFamily:'Jost-medium',fontSize:16}}>Isuzuma ab</Text>
                            <Text style={{fontSize: 12,color:'gray'}}>14 Points</Text>
                        </View>
                    </View>
                    <View style={styles.right}>
                        <Text style={{fontSize:16,fontFamily:'Jost-bold'}}>14</Text>
                        <Text style={{fontFamily:'Jost-light'}}>Out of 20</Text>

                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        display:'flex',
        flexDirection:'column',
        gap:20
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    wakoze: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    left:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    right:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-end'
    },
    icon:{
        padding:10,
        backgroundColor:'#FF9F00',
        borderRadius:50,
        width: 40,
        height: 40
    }
})

export default AyoWakoze