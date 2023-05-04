import React, {useState, useEffect} from 'react';

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

export function Levels ({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1C2B41'}}>
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity 
                style={styles.groupContainer}
                onPress={() => navigation.push('Beginner')}
                >
                <Text style={styles.textStyle}>
                    Beginner
                </Text>
                <Image 
                    style={styles.imageStyle} 
                    source={require('../../assets/images/LevelsTraining/Beginner.jpg')} />
            </TouchableOpacity> 
            <TouchableOpacity 
                style={styles.groupContainer}
                onPress={() => navigation.push('Amateur')}
                >
                <Text style={styles.textStyle}>
                    Amateur
                </Text>
                <Image 
                    style={styles.imageStyle} 
                    source={require('../../assets/images/LevelsTraining/Amateur.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.groupContainer}
                onPress={() => navigation.push('Professional')}
                >
                <Text style={styles.textStyle}>
                    Professional
                </Text>
                <Image 
                    style={styles.imageStyle} 
                    source={require('../../assets/images/LevelsTraining/Pro.jpg')} />
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    groupContainer: {
        height: 100,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        borderRadius: 20,
        marginBottom: 40,
    },
    textStyle: {
        flex: 1,
        color: 'white',
        fontSize: 28,
        textAlign: 'center',
    },
    container: {
        marginHorizontal: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    imageStyle: {
        position: 'absolute',
        marginLeft: '75%',
        height: '100%',
        width: '25%',
        borderRadius: 20
    },
});