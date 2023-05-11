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
                        <Text style={[styles.textStyle2, {color: '#2F486D'}]}>
                            Name: 
                        </Text>
                        <TextInput style={styles.textInputStyle}
                                   underlineColorAndroid="transparent"
                                   placeholder='Enter name'
                                   placeholderTextColor='#555555'
                        >
                        </TextInput>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#2F486D'}]}>
                            Current level:
                        </Text>
                        <TextInput style={styles.textInputStyle}
                                   underlineColorAndroid="transparent"
                                   placeholder='Enter level'
                                   placeholderTextColor='#555555'
                        >
                        </TextInput>
                        
                    </View>
                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#2F486D'}]}>
                            Email: 
                        </Text>
                        <TextInput style={styles.textInputStyle}
                                   underlineColorAndroid="transparent"
                                   placeholder='Enter email'
                                   placeholderTextColor='#555555'
                                   >
                        </TextInput>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#2F486D'}]}>
                            Date of Brith:
                        </Text>
                        <TextInput style={styles.textInputStyle}
                                   underlineColorAndroid="transparent"
                                   placeholder='Enter DOB'
                                   placeholderTextColor='#555555'
                                   >
                        </TextInput>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#2F486D'}]}>
                            Address:
                        </Text>
                        <TextInput style={styles.textInputStyle}
                                   underlineColorAndroid="transparent"
                                   placeholder='Enter address'
                                   placeholderTextColor='#555555'
                                >
                        </TextInput>
                    </View>
                </View>
                <Text style={[styles.titleStyle, { alignSelf: 'center' }]}>
                    Membership Information
                </Text>
                <View style={styles.textbox}>
                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#2F486D'}]}>
                            Membership ID: 
                        </Text>
                        <TextInput style={styles.textInputStyle}
                                   underlineColorAndroid="transparent"
                                   placeholder='Auto generated'
                                   placeholderTextColor='#555555'
                                   keyboardType='numeric'>
                        </TextInput>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#2F486D'}]}>
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
                        <Text style={[styles.textStyle2, {color: '#2F486D'}]}>
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
                        <Text style={[styles.textStyle2, {color: '#2F486D'}]}>
                            Date expired:
                        </Text>
                        
                        {resultDate ? ( //calculate expired date
                            <Text style={[styles.textStyle2, {color: '#555555', textAlign: 'right'}]}>
                                {resultDate}
                            </Text>
                        ) : null}
                    </View>

                    <View style={styles.textRow}>
                        <Text style={[styles.textStyle2, {color: '#2F486D'}]}>
                            Tel:
                        </Text>
                        
                        <TextInput style={styles.textInputStyle}
                                   underlineColorAndroid="transparent"
                                   placeholder='Enter phone numbers'
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
        color: "#2F486D",
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
