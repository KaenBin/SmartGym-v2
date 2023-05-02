import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

export function Shoulders ({ navigation }) {
    return (
        <SafeAreaView style={{backgroundColor: 'white', marginBottom: 20,}}>
            <ScrollView contentContainerStyle={styles.container}>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'cable lateral raise'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Shoulders/CableLateralRaise.jpg')} />
                        <Text style={styles.textStyle}>
                            Cable Lateral Raise
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'dumbbell front raise'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Shoulders/DumbbellFrontRaise.jpg')} />
                        <Text style={styles.textStyle}>
                            Dumbbell Front Raise
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'dumbbell lateral raise'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Shoulders/DumbbellLateralRaise.jpg')} />
                        <Text style={styles.textStyle}>
                            Dumbbell Lateral Raise
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'face pull'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Shoulders/FacePull.jpg')} />
                        <Text style={styles.textStyle}>
                            Face Pull
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'machine shoulder press'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Shoulders/MachineShoulderPress.jpg')} />
                        <Text style={styles.textStyle}>
                            Machine Shoulder Press
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'military press'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Shoulders/MilitaryPress.jpg')} />
                        <Text style={styles.textStyle}>
                            Military Press
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'push press'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Shoulders/PushPress.jpg')} />
                        <Text style={styles.textStyle}>
                            Push Press
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'shoulder press'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Shoulders/ShoulderPress.jpg')} />
                        <Text style={styles.textStyle}>
                            Shoulder Press
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'upright row'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Shoulders/UprightRow.jpg')} />
                        <Text style={styles.textStyle}>
                            Upright Row
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'landmine press'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Shoulders/LandminePress.jpg')} />
                        <Text style={styles.textStyle}>
                            Landmine Press
                        </Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    groupContainer: {
        flex: 1,
        height: 200,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 10,
    },
    textStyle: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
    },
    container: {
        marginHorizontal: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    imageStyle: {
        height: '78%',
        width: '90%',
        alignSelf: 'center',
    },
    viewStyle: {
        flex: 2,
        flexDirection: 'row',
    }
});