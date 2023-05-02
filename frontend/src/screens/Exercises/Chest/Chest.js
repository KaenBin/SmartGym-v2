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

export function Chest ({ navigation }) {
    return (
        <SafeAreaView style={{backgroundColor: 'white', marginBottom: 20,}}>
            <ScrollView contentContainerStyle={styles.container}>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'bench press'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Chest/BenchPress.jpg')} />
                        <Text style={styles.textStyle}>
                            Bench Press
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'incline press'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Chest/InclinePress.jpg')} />
                        <Text style={styles.textStyle}>
                            Incline Press
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'decline press'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Chest/DeclinePress.jpg')} />
                        <Text style={styles.textStyle}>
                            Decline Press
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'cable fly'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Chest/CableFly.jpg')} />
                        <Text style={styles.textStyle}>
                            Cable Fly
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'incline fly'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Chest/InclineFly.jpg')} />
                        <Text style={styles.textStyle}>
                            Incline Fly
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'dumbbell fly'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Chest/DumbbellFly.jpg')} />
                        <Text style={styles.textStyle}>
                            Dumbbell Fly
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'chest press'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Chest/ChestPress.jpg')} />
                        <Text style={styles.textStyle}>
                            Chest Press
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'machine fly'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Chest/MachineChessFly.jpg')} />
                        <Text style={styles.textStyle}>
                            Machine Fly
                        </Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'floor press'})}
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
                        onPress={() => navigation.push('Exercise Detail', {item: 'spoto press'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Chest/SpotoPress.jpg')} />
                        <Text style={styles.textStyle}>
                            Spoto Press
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
        fontSize: 25,
        textAlign: 'center',
    },
    container: {
        marginHorizontal: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    imageStyle: {
        height: '80%',
        width: '95%',
        alignSelf: 'center',
    },
    viewStyle: {
        flex: 2,
        flexDirection: 'row',
    }
});