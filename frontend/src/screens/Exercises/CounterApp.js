import React, { useRef, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import CountDownTimer from 'react-native-countdown-timer-hooks';
import Icon from 'react-native-vector-icons/Ionicons'

export function CounterApp() {
  // Timer References
  const refTimer = useRef();

  // For keeping a track on the Timer
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [timerEnd, setTimerEnd] = useState(true);

  const addTimer = async (time) => {
    if (seconds + time >= 60) {
      setMinutes(minutes + 1)
      setSeconds(seconds + time - 60)
    }
    else if (seconds + time <= 0) {
      if (minutes <= 0) {
        setMinutes(0)
        setSeconds(0)
      }
      else {
        setSeconds(60 + seconds + time)
        setMinutes(minutes - 1)
      }
    }
    else {
      setSeconds(seconds + time)
    }
  }

  const timerCallbackFunc = (timerFlag) => {
    setTimerEnd(timerFlag);
    console.warn(
      'Time is up!',
    );
  };

  return (
    <View
      style={styles.container}>
      <View style={{ display: timerEnd ? 'none' : 'flex' }}>
        <CountDownTimer
          ref={refTimer}
          timestamp={minutes * 60 + seconds}
          timerCallback={timerCallbackFunc}
          containerStyle={styles.timerContainer}
          textStyle={{
            fontSize: 80,
            color: '#FFFFFF',
            fontWeight: '500',
            letterSpacing: 0.25,
          }}
        />
      </View>
      <View style={[styles.timerContainer, { display: timerEnd ? 'flex' : 'none' }]}>
        <Text style={{ fontSize: 80, color: '#FFFFFF', fontWeight: '500' }}> {(minutes < 10) ? '0' : ''}{minutes}:{(seconds < 10) ? '0' : ''}{seconds}</Text>
      </View>
      <View style={{ flexDirection: 'row', margin: 40 }}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => addTimer(-30)}>
          <Text style={styles.buttonStyle}> -30 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => addTimer(-10)}>
          <Text style={styles.buttonStyle}> -10 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => addTimer(10)}>
          <Text style={styles.buttonStyle}> +10 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => addTimer(30)}>
          <Text style={styles.buttonStyle}> +30 </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.touchStyle, { display: timerEnd ? 'none' : 'flex' }]}
        onPress={async () => {
          setTimerEnd(true);
          await setSeconds(0);
          await setMinutes(0);
          await refTimer.current.resetTimer();
        }}>
        <Icon name="stop-circle" style={styles.iconStyle} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.touchStyle, { display: timerEnd ? 'flex' : 'none' }]}
        onPress={async () => {
          setTimerEnd(false);
          await refTimer.current.resetTimer();
        }}>
        <Icon name="play-circle" style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C2B41',
  },
  timerContainer: {
    height: 110,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 20,
    // backgroundColor: '#2196f3',
  },
  touchStyle: {
    height: 'auto',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: 10,
  },
  iconStyle: {
    fontSize: 100,
    // marginTop: '50%',
    // marginBottom: 10,
    color: 'black',
  },
  time: {
    fontSize: 80,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  buttonContainer: {
    padding: 10,
    margin: 10,
    marginTop: '35%',
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
  },
  buttonStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#D9D9D9',
  },
})