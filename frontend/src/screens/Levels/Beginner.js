import Icon2 from 'react-native-vector-icons/Ionicons';

// import all the components we are going to use
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import API from '../../api/api'

export function Beginner({ route, navigation }) {
    const lst = [
        "dumbbell tricep extension",
        "bench press",
        "hammer curl",
        "dumbbell tricep extension",
        "bench press",
        "hammer curl",
        "dumbbell tricep extension",
    ]
    const token = route.params.userToken;

    const replaceHandler = async () => {
        await API.replaceAll(token, lst)
        return [navigation.popToTop(), navigation.navigate('Exercises')]
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={lst}
                renderItem={({ item }) => (
                    <View style={styles.flatStyle}>
                        <View style={styles.listStyle}>
                            <Text style={styles.textStyle}>{item}</Text>
                        </View>
                    </View>
                )}
            />
            <TouchableOpacity
                style={styles.addContainer}
                onPress={() => replaceHandler()}
            >
                <Icon2 name="add-circle" style={styles.addIcon} />
                <Text style={styles.addText}>
                    Add to My Exercises
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
        margin: 15,
    },
    addIcon: {
        color: 'white',
        fontSize: 50,
        margin: 5,
    },
    iconContainer: {
        alignItems: 'center',
        padding: '2%',
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
        width: '90%',
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