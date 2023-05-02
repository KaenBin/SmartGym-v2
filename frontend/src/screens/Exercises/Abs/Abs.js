// import all the components we are going to use
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

// import data from './Data';

export function Abs ({ navigation }) {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', marginBottom: 20, }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'ab wheel rollout'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Abs/AbWheelRollout.jpg')} />
                        <Text style={styles.textStyle}>
                            Ab Wheel Rollout
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'cable crunch'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Abs/CableCrunch.jpg')} />
                        <Text style={styles.textStyle}>
                            Cable Crunch
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'dumbbell side bend'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Abs/DumbbellSideBend.jpg')} />
                        <Text style={styles.textStyle}>
                            Dumbbell Side Bend
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'hanging knee raise'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Abs/HangingKneeRaise.jpg')} />
                        <Text style={styles.textStyle}>
                            Hanging Knee Raise
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'hanging leg raise'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Abs/HangingLegRaise.jpg')} />
                        <Text style={styles.textStyle}>
                            Hanging Leg Raise
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'lying leg raise'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Abs/LyingLegRaise.jpg')} />
                        <Text style={styles.textStyle}>
                            Lying Leg Raise
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'machine seated crunch'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Abs/MachineSeatedCrunch.jpg')} />
                        <Text style={styles.textStyle}>
                            Machine Seated Crunch
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'russian twist'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Abs/RussianTwist.jpg')} />
                        <Text style={styles.textStyle}>
                            Russian Twist
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.viewStyle}
                >
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'sit ups'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Abs/SitUps.jpg')} />
                        <Text style={styles.textStyle}>
                            Sit Ups
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.groupContainer}
                        onPress={() => navigation.push('Exercise Detail', {item: 'toes to bar'})}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={require('../../../../assets/images/Abs/ToesToBar.jpg')} />
                        <Text style={styles.textStyle}>
                            Toes To Bar 
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
        width: '90%',
        alignSelf: 'center',
    },
    viewStyle: {
        flex: 2,
        flexDirection: 'row',
    }
});