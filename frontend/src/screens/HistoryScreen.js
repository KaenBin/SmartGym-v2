import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import { todayString } from 'react-native-calendars/src/expandableCalendar/commons';

const CalendarTheme = {
  arrowColor: 'white',
  calendarBackground: '#1C2B41',
  dayTextColor: 'white',
  monthTextColor: 'white',
  textDisabledColor: 'gray',
  todayTextColor: 'white',
}

export function HistoryScreen({ navigation }) {
  const [currentDate, setCurrentDate] = useState(moment()
    .utcOffset('+07:00')
    .format('YYYY-MM-DD'));
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C2B41' }}>
      <Calendar
        style={styles.calendar}
        enableSwipeMonths={true}
        theme={CalendarTheme}
        markedDates={{
          '2023-04-01': { selected: true, marked: true, selectedColor: '#8CADFF' },
          '2023-04-03': { marked: true },
          '2023-04-06': { selected: true, marked: true, selectedColor: '#8CADFF' },
          '2023-04-07': { selected: true, marked: true, selectedColor: '#8CADFF' },
          '2023-04-10': { marked: true },
          '2023-04-08': { selected: true, marked: true, selectedColor: '#8CADFF' },
          '2023-04-11': { marked: true },
          '2023-04-14': { selected: true, marked: true, selectedColor: '#8CADFF' },
          '2023-04-15': { selected: true, marked: true, selectedColor: '#8CADFF' },
          '2023-04-17': { marked: true },
          '2023-04-21': { selected: true, marked: true, selectedColor: '#8CADFF' },
          '2023-04-23': { selected: true, marked: true, selectedColor: '#8CADFF' },
          '2023-04-25': { selected: true, marked: true, selectedColor: '#8CADFF' },
          [currentDate]: {selected: true, selectedColor: '#589C5F'},
          }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: '#1C2B41',
  },
});