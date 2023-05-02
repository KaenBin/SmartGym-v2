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

export function FullBody ({ navigation }) {
    return (
        <SafeAreaView style={{backgroundColor: 'white', marginBottom: 20,}}>
            <ScrollView contentContainerStyle={styles.container}>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'burpees'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/FullBody/Burpees.jpg')} />
                        <Text style={styles.textStyle}>
                            Burpees
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'deadlift'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/FullBody/Deadlift.jpg')} />
                        <Text style={styles.textStyle}>
                            Deadlift
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'dumbbell deadlift'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/FullBody/DumbbellDeadlift.jpg')} />
                        <Text style={styles.textStyle}>
                            Dumbbell Deadlift
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'dumbbell snatch'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/FullBody/DumbbellSnatch.jpg')} />
                        <Text style={styles.textStyle}>
                            Dumbbell Snatch
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'power clean'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/FullBody/PowerClean.jpg')} />
                        <Text style={styles.textStyle}>
                            Power Clean
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'rack pull'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/FullBody/RackPull.jpg')} />
                        <Text style={styles.textStyle}>
                            Rack Pull
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'single leg dumbbell deadlift'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/FullBody/SingleLegDumbbellDeadlift.jpg')} />
                        <Text style={styles.textStyle}>
                            Single Leg Dumbbell Deadlift
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'sumo deadlift'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/FullBody/SumoDeadlift.jpg')} />
                        <Text style={styles.textStyle}>
                            Sumo Deadlift
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
    },
    container: {
        marginHorizontal: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    imageStyle: {
        height: '78%',
        width: '92%',
        alignSelf: 'center',
    },
    viewStyle: {
        flex: 2,
        flexDirection: 'row',
    }
});