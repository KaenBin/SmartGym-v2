import React, { useState, useEffect } from 'react'

import {
    SafeAreaView,
    Text,
    StyleSheet,
    View, 
    ScrollView,
    TextInput,
    Image, 
    Platform,
    TouchableOpacity
} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

export function PersonalScreen({ navigation }) {
    const [date, setDate] = useState('')
    const [resultDate, setResultDate] = useState('')
    const [month, setMonth] = useState('')
    const [image, setImage] = useState(null)

    const addImage = async () => {
        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        console.log(JSON.stringify(_image))
        if (!_image.canceled) {
            setImage(_image.uri)
        }
    }    

    const handleDateChange = (newDate) => {
        setDate(newDate)
    }
    const handleMonthChange = (newMonth) => {
        setMonth(newMonth)
    }
    

    const handleCalculate = () => {
        const inputDate = new Date(date)
        const result = new Date(inputDate.getFullYear(), inputDate.getMonth() + parseInt(month), inputDate.getDate())
        setResultDate(result.toISOString().substr(0, 10))
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#EFFEFF" }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={[styles.titleStyle, { alignSelf: 'center' }]}>
                    User Profile
                </Text>

                <View style={imageUploaderStyles.container}>
                    {
                        image && 
                        <Image source={{uri: image}} style={{ width: 200, height: 200}}/>
                    }
                    <View style={imageUploaderStyles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn}>
                            <Text>
                                {image ? 'Edit ' : 'Upload ' }
                                Image
                            </Text>
                            <AntDesign name="camera" size={25} color="black"/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.textbox}>
                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#5b92e5'}]}>
                            Name: 
                        </Text>
                        <Text style={[styles.textStyle2, {color: '#555555', textAlign: 'right', }]}>
                            Critiano Ronaldo
                        </Text>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#5b92e5'}]}>
                            Current level:
                        </Text>
                        <Text style={[styles.textStyle2, {color: '#555555', textAlign: 'right', }]}>
                            Pro
                        </Text>
                        
                    </View>
                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#5b92e5'}]}>
                            Email: 
                        </Text>
                        <Text style={[styles.textStyle2, {color: '#555555', textAlign: 'right',}]}>
                            cristiano@gmail.com
                        </Text>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#5b92e5'}]}>
                            Date of Brith:
                        </Text>
                        <Text style={[styles.textStyle2, {color: '#555555', textAlign: 'right', }]}>
                            February 5th, 1985
                        </Text>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#5b92e5'}]}>
                            Address:
                        </Text>
                        <Text style={[styles.textStyle2, {color: '#555555', textAlign: 'right', }]}>
                            Funchal, Portugal
                        </Text>
                    </View>
                </View>
                <Text style={[styles.titleStyle, { alignSelf: 'center' }]}>
                    Membership Information
                </Text>
                <View style={styles.textbox}>
                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#5b92e5'}]}>
                            Membership ID: 
                        </Text>
                        <Text style={[styles.textStyle2, {color: '#555555', textAlign: 'right', }]}>
                            17042023
                        </Text>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#5b92e5'}]}>
                            Date begin:
                        </Text>
                        
                        <TextInput style={styles.textInputStyle}
                                   underlineColorAndroid="transparent"
                                   placeholder='YYYY-MM-DD'
                                   placeholderTextColor='#555555'
                                   value={date}
                                   onChangeText={handleDateChange}
                                   onSubmitEditing={handleCalculate}>
                        </TextInput>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#5b92e5'}]}>
                            Period: 
                        </Text>
                        
                        <TextInput style={styles.textInputStyle}
                                   underlineColorAndroid="transparent"
                                   placeholder='Add number'
                                   placeholderTextColor='#555555'
                                   value={month}
                                   onChangeText={handleMonthChange}
                                   onSubmitEditing={handleCalculate}>
                        </TextInput>
                        <Text style={{fontSize: 18, color: '#555555'}}> months </Text>
                    </View>

                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#5b92e5'}]}>
                            Date expired:
                        </Text>
                        
                        {resultDate ? ( //calculate expired date
                            <Text style={[styles.textStyle2, {color: '#555555', textAlign: 'right'}]}>
                                {resultDate}
                            </Text>
                        ) : null}
                    </View>

                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#5b92e5'}]}>
                            Tel:
                        </Text>
                        
                        <TextInput style={styles.textInputStyle}
                                   underlineColorAndroid="transparent"
                                   placeholder='Add numbers'
                                   placeholderTextColor='#555555'
                                   keyboardType='numeric'>
                        </TextInput>
                    </View>
                </View>
            </ScrollView>

            <Text style={styles.textHCMUT}>
                <Text>powered by</Text>
                <Text style={{ fontWeight: 'bold'}}> HCMUT</Text>
            </Text>

        </SafeAreaView>
    );
};

export default PersonalScreen

const imageUploaderStyles=StyleSheet.create({
    container:{
        elevation:2,
        height:200,
        width:200,
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'25%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }
})

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 10,
    },
    imageStyle: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    textbox: {
        flex: 1,
        width: '91%',
        alignSelf: 'center',
        backgroundColor: "#DCDCDC",
        borderColor: 'black',
        borderRadius: 12,
        borderWidth: 2, 
        margin: 5,
    },
    textHCMUT: {
        alignSelf: 'center',
        color: "#1976D2",
    },
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
    },
    textRow: {
        flex: 2,
        flexDirection: 'row',
        margin: 10,
    },
    textStyle2: {
        flex: 1,
        fontSize: 18,
    },
    textInputStyle: {
        height: 20,
        borderWidth: 0,
        margin: 1.5,
        borderColor: 'black',
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        textAlign: 'center',
        color: '#555555',
        fontSize: 18,
    }
})
