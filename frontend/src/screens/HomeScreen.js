import * as React from 'react';
import { AuthContext } from './utils';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/Foundation'
import Icon4 from 'react-native-vector-icons/FontAwesome'
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  // FlatList,
  TextInput,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';


export function HomeScreen({ navigation }) {
  // const [search, setSearch] = useState('');
  // const [filteredDataSource, setFilteredDataSource] = useState([]);
  // const [masterDataSource, setMasterDataSource] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       setFilteredDataSource(responseJson);
  //       setMasterDataSource(responseJson);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // const searchFilterFunction = (text) => {
  //   // Check if searched text is not blank
  //   if (text) {
  //     // Inserted text is not blank
  //     // Filter the masterDataSource
  //     // Update FilteredDataSource
  //     const newData = masterDataSource.filter(
  //       function (item) {
  //         const itemData = item.title
  //           ? item.title.toUpperCase()
  //           : ''.toUpperCase();
  //         const textData = text.toUpperCase();
  //         return itemData.indexOf(textData) > -1;
  //     });
  //     setFilteredDataSource(newData);
  //     setSearch(text);
  //   } else {
  //     // Inserted text is blank
  //     // Update FilteredDataSource with masterDataSource
  //     setFilteredDataSource(masterDataSource);
  //     setSearch(text);
  //   }
  // };

  // const ItemView = ({item}) => {
  //   return (
  //     // Flat List Item
  //     <Text
  //       style={styles.itemStyle}
  //       onPress={() => getItem(item)}>
  //       {item.id}
  //       {'.'}
  //       {item.title.toUpperCase()}
  //     </Text>
  //   );
  // };

  // const ItemSeparatorView = () => {
  //   return (
  //     // Flat List Item Separator
  //     <View
  //       style={{
  //         height: 0.5,
  //         width: '100%',
  //         backgroundColor: '#C8C8C8',
  //       }}
  //     />
  //   );
  // };

  // const getItem = (item) => {
  //   // Function for click on an item
  //   alert('Id : ' + item.id + ' Title : ' + item.title);
  // };
  {/*, justifyContent: 'space-between',*/ }
  const { signOut } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EFFEFF" }}>

      <View style={styles.navigationBar}>
        <Text style={styles.textWelcome}>
          Welcome to the home page
        </Text>
        <Text style={styles.textIntro}>
          Here's where we provide you amazing features of the app
        </Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          // onChangeText={text}
          // value={search}
          underlineColorAndroid="transparent"
          placeholder="🔍Search"
          placeholderTextColor='#D9D9D9'
        />
      </View>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/images/SmartGym.png')}
      />
      <View style={{ flex: 3, flexDirection: 'row', alignSelf: 'flex-end' }}>
        <View style={styles.containerBox}>
          <TouchableOpacity style={styles.opcaityStyle} onPress={() => navigation.push('HistoryScreen')}>
            <Icon1 name="calendar-alt" style={styles.iconStyle} />
            <View style={styles.textBox}>
              <Text style={styles.textStyle}>Training</Text>
              <Text style={styles.textStyle}>History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcaityStyle} onPress={() => navigation.push('LevelScreen')}>
            <Icon1 name="dumbbell" style={styles.iconStyle} />
            <View style={styles.textBox}>
              <Text style={styles.textStyle}>Levels of</Text>
              <Text style={styles.textStyle}>Training</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBox}>
          <TouchableOpacity style={styles.opcaityStyle} onPress={() => navigation.push('Exercises')}>
            <Icon3 name="clipboard-notes" style={[styles.iconStyle, { fontSize: 63 }]} />
            <View style={styles.textBox}>
              <Text style={styles.textStyle}>My</Text>
              <Text style={styles.textStyle}>Exercises</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcaityStyle} onPress={() => navigation.push('PersonalScreen')}>
            <Icon4 name="user-circle" style={styles.iconStyle} />
            <View style={styles.textBox}>
              <Text style={styles.textStyle}>Personal</Text>
              <Text style={styles.textStyle}>Information</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBox}>
          <TouchableOpacity style={styles.opcaityStyle} onPress={() => navigation.push('GymScreen')}>
            <Icon2 name="information-circle" style={styles.iconStyle} />
            <View style={styles.textBox}>
              <Text style={styles.textStyle}>Gym</Text>
              <Text style={styles.textStyle}>Information</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcaityStyle} onPress={signOut}>
            <Icon2 name="arrow-back-circle" style={[styles.iconStyle, {fontSize: 55}]} />
            <View style={styles.textBox}>
              <Text style={styles.textStyle}>Sign Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.textHCMUT}>
        <Text>powered by</Text>
        <Text style={{ fontWeight: "bold" }}> HCMUT</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    marginLeft: '75%',
    height: '75%',
    width: '10%',  
    color: 'black',
  },
  container: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: '#EFFEFF',
  },
  containerBox: {
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    alignSelf: 'center',
    height: 150,
    width: "65%",
    marginBottom: 10,
  },
  iconStyle: {
    fontSize: 60,
    // marginTop: 10,
    marginBottom: 10,
    color: 'black',
  },
  navigationBar: {
    backgroundColor: '#2F486D',
    height: "25%",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  opcaityStyle: {
    alignItems: 'center',
    marginBottom: 0,
  },
  textBox: {
    height: '30%',
    width: 100,
    backgroundColor: '#DCDCDC',
    borderRadius: 20,
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    // alignContent: 'center',
    // textAlign: 'center',
    justifyContent: 'center',
  },
  textHCMUT: {
    alignSelf: 'center',
    color: '#2F486D',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    margin: 10,
    borderColor: 'black',
    backgroundColor: '#2F486D',
    borderRadius: 20,
    textAlign: 'center',
    color: '#BEBEBE'
  },
  textIntro: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 12,
    // color: '#555555'
    // textAlign: 'center',
    // justifyContent: 'center',
  },
  textOut: {
    color: 'white',
    alignSelf: 'center',
  },
  textWelcome: {
    marginTop: 75,
    marginBottom: 10,
    fontSize: 29,
    fontWeight: 700,
    color: 'white',
    alignSelf: 'center',
  },
});