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

export function Triceps ({ navigation }) {
    return (
        <SafeAreaView style={{backgroundColor: 'white', marginBottom: 20,}}>
            <ScrollView contentContainerStyle={styles.container}>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'dips'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Triceps/Dips.jpg')} />
                        <Text style={styles.textStyle}>
                            Dips
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'dumbbell tricep extension'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Triceps/DumbbellTricepExtension.jpg')} />
                        <Text style={styles.textStyle}>
                            Dumbbell Tricep Extension
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'dumbbell tricep kickback'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Triceps/DumbbellTricepKickback.jpg')} />
                        <Text style={styles.textStyle}>
                            Dumbbell Tricep Kickback
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'lying dumbbell tricep extension'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Triceps/LyingDumbbellTricepExtension.jpg')} />
                        <Text style={styles.textStyle}>
                            Lying Dumbbell Tricep Extension
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'lying tricep extension'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Triceps/LyingTricepExtension.jpg')} />
                        <Text style={styles.textStyle}>
                            Lying Tricep Extension
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'reverse grip tricep pushdown'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Triceps/ReverseGripTricepPushdown.jpg')} />
                        <Text style={styles.textStyle}>
                            Reverse Grip Tricep Pushdown
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'seated dip machine'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Triceps/SeatedDipMachine.jpg')} />
                        <Text style={styles.textStyle}>
                            Seated Dip Machine
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'tricep pushdown'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Triceps/TricepPushdown.jpg')} />
                        <Text style={styles.textStyle}>
                            Tricep Pushdown
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
        height: 220,
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
        height: '80%',
        width: '90%',
        alignSelf: 'center',
    },
    viewStyle: {
        flex: 2,
        flexDirection: 'row',
    }
});