import React, {useState, useEffect} from 'react';

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

export function MuscleGroups ({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1C2B41'}}>
      <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity 
          style={styles.groupContainer}
          onPress={() => navigation.push('Chest')}
        >
          <Text style={styles.textStyle}>
            Chest
          </Text>
          <Image 
            style={styles.imageStyle} 
            source={require('../../../assets/images/Chest.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.groupContainer}
          onPress={() => navigation.push('Back')}
        >
          <Text style={styles.textStyle}>
            Back
          </Text>
          <Image 
            style={styles.imageStyle} 
            source={require('../../../assets/images/Back.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.groupContainer}
          onPress={() => navigation.push('Biceps')}
        >
          <Text style={styles.textStyle}>
            Biceps
          </Text>
          <Image 
            style={styles.imageStyle} 
            source={require('../../../assets/images/Biceps.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.groupContainer}
          onPress={() => navigation.push('Triceps')}
        >
          <Text style={styles.textStyle}>
            Triceps
          </Text>
          <Image 
            style={styles.imageStyle} 
            source={require('../../../assets/images/Triceps.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.groupContainer}
          onPress={() => navigation.push('Shoulders')}
        >
          <Text style={styles.textStyle}>
            Shoulders
          </Text>
          <Image 
            style={styles.imageStyle} 
            source={require('../../../assets/images/Shoulders.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.groupContainer}
          onPress={() => navigation.push('Legs')}
        >
          <Text style={styles.textStyle}>
            Legs
          </Text>
          <Image 
            style={styles.imageStyle} 
            source={require('../../../assets/images/Legs.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.groupContainer}
          onPress={() => navigation.push('Abs')}
        >
          <Text style={styles.textStyle}>
            Abs
          </Text>
          <Image 
            style={styles.imageStyle} 
            source={require('../../../assets/images/Abs.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.groupContainer}
          onPress={() => navigation.push('Full Body')}
        >
          <Text style={styles.textStyle}>
            Full Body
          </Text>
          <Image 
            style={styles.imageStyle} 
            source={require('../../../assets/images/FullBody.jpg')} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    groupContainer: {
        height: 90,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    textStyle: {
        flex: 1,
        color: 'white',
        fontSize: 25,
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
        height: '75%',
        width: '10%',
    },
});