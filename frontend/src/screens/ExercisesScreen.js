import React, { useState, useEffect } from 'react';
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Ionicons';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';

import API from '../api/api'

export function ExercisesScreen({ route, navigation }) {
  const [exercises, setExercises] = useState([])
  const token = route.params.userToken;

  const deleteHandler = async (token, item) => {
    const result = await API.removeSingle(token, item)
    setExercises(result.data)
    return [...exercises]
  }

  const fetchPost = async (token) => {
    const result = await API.getAll(token)
    setExercises(result.data)
  }

  useEffect(() => {
    fetchPost(token)

    const reRender = navigation.addListener('focus', () => {
      fetchPost(token)
    });

    return reRender;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={exercises}
        extraData={exercises}
        renderItem={({ item }) => (
          <View style={styles.flatStyle}>
            <View style={styles.listStyle}>
              <Text style={styles.textStyle}>{item}</Text>
            </View>
            <TouchableWithoutFeedback style={styles.iconContainer} onPress={() => {deleteHandler(token, item)}}>
              <Icon2 name="trash" style={styles.trashIcon} />
            </TouchableWithoutFeedback>
          </View>

        )}
      />
      <TouchableOpacity
        style={[styles.addContainer, { marginTop: 15 }]}
        onPress={() => navigation.push('CounterApp')}
      >
        <Icon1 name="rightcircle" style={styles.startIcon} />
        <Text style={styles.addText}>
          Begin the Exercise
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addContainer}
        onPress={() => navigation.push('MuscleGroups')}
      >
        <Icon2 name="add-circle" style={styles.addIcon} />
        <Text style={styles.addText}>
          Add more Exercises
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addContainer: {
    height: '10%',
    width: '75%',
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 30,
    marginBottom: 15,
  },
  addIcon: {
    color: 'white',
    fontSize: 50,
    margin: 5,
  },
  startIcon: {
    color: 'white',
    fontSize: 40,
    margin: 10,
  },
  trashIcon: {
    // position: 'absolute',
    color: '#D9D9D9',
    fontSize: 50,
    // marginLeft: '80%',
  },
  iconContainer: {
    // backgroundColor: '#D9D9D9',
    alignItems: 'center',
    padding: '2%',
    // color: 'black',
  },
  addText: {
    color: 'black',
    fontSize: 25,

  },
  container: {
    alignItems: 'center',
    backgroundColor: '#1C2B41',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  listStyle: {
    width: '75%',
    padding: 20,
    marginTop: 15,
    marginLeft: '5%',
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 5,
  },
  flatStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  textStyle: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
});