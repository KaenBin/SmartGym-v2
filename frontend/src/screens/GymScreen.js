import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import defineComponent from '../components/AdafruitIO';
import API from '../api/api';
import Icon from 'react-native-vector-icons/AntDesign'

import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

const GymScreen = () =>  {
    const [moisure, setMoisure] = useState('0.0');
    const [temp, setTemp] = useState('0.0');
    const [movement, setMovement] = useState('0');
    const [light, setLight] = useState("B");
    const [fan, setFan] = useState(0);

    const lightHandler = () => {
        const value = (light == "A") ? "B" : "A"
        API.postKey("turnonlight", value)
    }

    const fanHandler = (value) => {
        result = Number(value) + Number(fan)
        if (result < 0 || result > 3)
            return
        API.postKey("setup-fan", result)
    }

    useEffect(() => {
        const myInterval = setInterval(async () => {
            await axios.get('https://io.adafruit.com/api/v2/DangLe1311/feeds/sensor-moist')
                .then((response) => {
                    console.log("hi")
                    setMoisure(response.data.last_value);
                })
                .catch(error => {
                    console.log(error);
                });
            await axios.get('https://io.adafruit.com/api/v2/DangLe1311/feeds/sensor-temp')
                .then(response => {
                    setTemp(response.data.last_value);
                })
                .catch(error => {
                    console.log(error);
                });
            await axios.get('https://io.adafruit.com/api/v2/DangLe1311/feeds/sensor-movement')
                .then(response => {
                    setMovement(response.data.last_value);
                })
                .catch(error => {
                    console.log(error);
                });
            await axios.get('https://io.adafruit.com/api/v2/DangLe1311/feeds/turnonlight')
                .then(response => {
                    setLight(response.data.last_value)
                })
                .catch(error => {
                    console.log(error);
                });
            await axios.get('https://io.adafruit.com/api/v2/DangLe1311/feeds/setup-fan')
                .then(response => {
                    setFan(response.data.last_value)
                })
                .catch(error => {
                    console.log(error);
                });
        }, 5000)

        return () => clearInterval(myInterval)
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#EFFEFF" }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={[styles.titleStyle, { alignSelf: 'center' }]}>
                    Room Information
                </Text>
                <View style={[styles.textRow, { margin: 2 }]}>
                    <View style={styles.textBox}>
                        <Text style={styles.textStyle1}>
                            Temp
                        </Text>
                        <Text style={styles.textStyle1}>
                            {temp}°C
                        </Text>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.textStyle1}>
                            Moisture
                        </Text>
                        <Text style={styles.textStyle1}>
                            {moisure}%
                        </Text>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.textStyle1}>
                            Gymers
                        </Text>
                        <Text style={styles.textStyle1}>
                            {movement} people
                        </Text>
                    </View>
                </View>
                <View style={[styles.textRow, { margin: 2 }]}>
                    <TouchableOpacity style={styles.textBox} onPress={() => { lightHandler() }}>
                        <Text style={styles.textStyle1}>
                            Light
                        </Text>
                        <Text style={styles.textStyle1}>
                            {(light == "A") ? "On" : "Off"}
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.textBox}>
                        <Text style={styles.textStyle1}>
                            Fan
                        </Text>
                        <View style={styles.textRow}>
                            <TouchableOpacity onPress={() => { fanHandler(-1) }}>
                                <Icon name="caretleft" style={styles.iconStyle} />
                            </TouchableOpacity>
                            <Text style={styles.textStyle1}>
                                {fan}
                            </Text>
                            <TouchableOpacity onPress={() => { fanHandler(1) }}>
                                <Icon name="caretright" style={styles.iconStyle} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={[styles.textRow, { margin: 2 }]}>
                    <View style={styles.textBox}>
                        <Text style={styles.textStyle1}>
                            All facilities
                        </Text>
                        <Text style={styles.textStyle1}>
                            A1, A2,...
                        </Text>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.textStyle1}>
                            Available facilities
                        </Text>
                        <Text style={styles.textStyle1}>
                            B1, C2,...
                        </Text>
                    </View>
                </View>
                <Text style={styles.textStyle1}>
                    Users:
                </Text>
                <View style={styles.textBox}>
                    <Text style={styles.titleStyle}>
                        About Gym
                    </Text>
                    <View style={styles.textRow}>
                        <Text style={styles.textStyle2}>
                            Company name:
                        </Text>
                        <Text style={[styles.textStyle2, { color: '#555555', textAlign: 'right', }]}>
                            Group 03 - HCMUT
                        </Text>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={styles.textStyle2}>
                            Address:
                        </Text>
                        <Text style={[styles.textStyle2, { color: '#555555', textAlign: 'right', }]}>
                            Ly Thuong Kiet, HCMC
                        </Text>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={styles.textStyle2}>
                            Hotline:
                        </Text>
                        <Text style={[styles.textStyle2, { color: '#555555', textAlign: 'right', }]}>
                            0123456789
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <Text style={styles.textHCMUT}>
                <Text>powered by</Text>
                <Text style={{ fontWeight: "bold" }}> HCMUT</Text>
            </Text>
        </SafeAreaView>
    );
};

export default GymScreen;

const styles = StyleSheet.create({
    container: {
        // marginHorizontal: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    imageStyle: {
        alignSelf: 'center',
        height: 150,
        width: "65%",
        margin: 25,
    },
    textBox: {
        flex: 1,
        // height: '70%',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#AFBCC4',
        borderColor: 'black',
        borderRadius: 20,
        borderWidth: 2,
        margin: 5,
    },
    textHCMUT: {
        alignSelf: 'center',
        color: '#1976D2',
    },
    textRow: {
        flex: 2,
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
    },
    textStyle1: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
    },
    textStyle2: {
        flex: 1,
        fontSize: 17,
    },
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
    },
    iconStyle: {
        fontSize: 30,
        // marginTop: 10,
        marginBottom: 10,
        color: 'black',
    },
});
