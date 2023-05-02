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
export function Legs ({ navigation }) {
    return (
        <SafeAreaView style={{backgroundColor: 'white', marginBottom: 20,}}>
            <ScrollView contentContainerStyle={styles.container}>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'dumbbell bulgarian split squat'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Legs/DumbbellBulgarianSplitSquat.jpg')} />
                        <Text style={styles.textStyle}>
                            Dumbbell Bulgarian Split Squat
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'goblet squat'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Legs/GobletSquat.jpg')} />
                        <Text style={styles.textStyle}>
                            Goblet Squat
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'hack squat'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Legs/HackSquat.jpg')} />
                        <Text style={styles.textStyle}>
                            Hack Squat
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'hip thrust'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Legs/HipThrust.jpg')} />
                        <Text style={styles.textStyle}>
                            Hip Thrust
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'leg extension'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Legs/LegExtension.jpg')} />
                        <Text style={styles.textStyle}>
                            Leg Extension
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'lying leg curl'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Legs/LyingLegCurl.jpg')} />
                        <Text style={styles.textStyle}>
                            Lying Leg Curl
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'machine calf raise'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Legs/MachineCalfRaise.jpg')} />
                        <Text style={styles.textStyle}>
                            Machine Calf Raise
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'sled leg press'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Legs/SledLegPress.jpg')} />
                        <Text style={styles.textStyle}>
                            Sled Leg Press 
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'squat'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Legs/Squat.jpg')} />
                        <Text style={styles.textStyle}>
                            Squat
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'pistol squat'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Legs/PistolSquat.jpg')} />
                        <Text style={styles.textStyle}>
                            Pistol Squat
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