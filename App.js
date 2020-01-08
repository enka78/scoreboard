import React, {useState} from 'react';
import {View,
        TextInput,
        Button,
        StyleSheet
} from 'react-native';

import MyComponent from './components/home'

export default function App() {
const [entredGoal, setEntredGoal] = useState('');
const [coursGoals, setCoursGoals] = useState([]);
const goalInputHandler = (entredText) =>{
  setEntredGoal(entredText);
};
const addGoalHandler = () => {
  setCoursGoals(currentGoals => [...currentGoals, enteredGoal]);
};
  return (
        <View style={styles.screen}>
           <MyComponent></MyComponent>
          <View>

          </View>
         </View>
       );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center'
   },
   input:{
     width: '80%',
     borderColor: 'black',
     padding: 10,
     borderWidth: 1
   }


});
