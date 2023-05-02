import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import client from '../api/client';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from './FakeData';
const { width, height } = Dimensions.get('window');
import API from '../api/api';
import { Button } from 'react-native-elements';

export function ExerciseDetail ({ navigation, route }) {
    const [exercise, setExercise] = useState([])
    const name = route.params.item;
    const token = route.params.userToken;

    const getImage = (id) => {
        return images.at(id).image
    }

    const addHandler = async (token, name) => {
        await API.addSingle(token, name)
        return navigation.navigate('ExercisesScreen')
      }

    const fetchPost = async (name) => {
        const result = await API.getSingle(name)
        setExercise(result.data)
    }

    useEffect(() => {
        fetchPost(name)
    }, [])
        
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollStyle}>
                <Text style={styles.nameStyle}> {exercise.name} </Text>
                <Image style={styles.imageStyle} source={getImage(exercise.id - 1)}/>
                <Text style={styles.descStyle}> {exercise.desc} </Text>
                <View style={styles.buttonStyle}>
                    <Button title="Add to My Exercise" onPress={() => addHandler(token, exercise.name)} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    nameStyle: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 20,
        height: 'auto',
    }, 
    buttonStyle: {
        alignSelf: 'center',
        paddingBottom: 30,
        // height: 20,
        width: '80%',
    },
    container: {
        alignSelf: 'center',
        width: '90%',
        height: '100%',
        backgroundColor: '#E8E8E8',
    },
    descStyle: {
        fontSize: 20,
        padding: 20,
        height: 'auto',
    },
    imageStyle: {
        alignSelf: 'center',
        width: Math.floor(width * 0.8),
        height: Math.floor(height * 0.4),
    },
    scrollStyle: {
        width: '100%',
    },
})