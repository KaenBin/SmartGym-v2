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

export function Biceps ({ navigation }) {
    return (
        <SafeAreaView style={{backgroundColor: 'white', marginBottom: 20,}}>
            <ScrollView contentContainerStyle={styles.container}>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'barbell curl'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Biceps/BarbellCurl.jpg')} />
                        <Text style={styles.textStyle}>
                            Barbell Curl
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'cable bicep curl'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Biceps/CableBicepCurl.jpg')} />
                        <Text style={styles.textStyle}>
                            Cable Bicep Curl
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'dumbbell concentration curl'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Biceps/DumbbellConcentrationCurl.jpg')} />
                        <Text style={styles.textStyle}>
                            Dumbbell Concentration Curl
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'dumbbell curl'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Biceps/DumbbellCurl.jpg')} />
                        <Text style={styles.textStyle}>
                            Dumbbell Curl
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'hammer curl'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Biceps/HammerCurl.jpg')} />
                        <Text style={styles.textStyle}>
                            Hammer Curl
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'one arm cable bicep curl'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Biceps/OneArmCableBicepCurl.jpg')} />
                        <Text style={styles.textStyle}>
                            One Arm Cable Bicep Curl
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'preacher curl'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Biceps/PreacherCurl.jpg')} />
                        <Text style={styles.textStyle}>
                            Preacher Curl
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'strict curl'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Biceps/StrictCurl.jpg')} />
                        <Text style={styles.textStyle}>
                            Strict Curl
                        </Text>

                    </TouchableOpacity>
                </View>
                {/* <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                    //   onPress={addExercisesHandler}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Chest/FloorPress.jpg')} />
                        <Text style={styles.textStyle}>
                            Floor Press
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                    //   onPress={addExercisesHandler}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Chest/SpotoPress.jpg')} />
                        <Text style={styles.textStyle}>
                            Spoto Press
                        </Text>

                    </TouchableOpacity>
                </View> */}
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
        // verticalAlign:'bottom',
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