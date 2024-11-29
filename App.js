import { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }
  
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredGoalText) =>{
    setCourseGoals((currentCourseGoals) =>[
      ...currentCourseGoals,
      {text:enteredGoalText, id: Math.random().toString() }
    ]);
    setModalIsVisible(false)
  }

  const deleteGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal.id!== goalId));
    console.log('Deleted')
  }

  return (

    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>

        <Button title='Add New Goal' color="#5e0acc"  onPress={startAddGoalHandler} />

      {modalIsVisible && <GoalInput visible={modalIsVisible} onCancel={endAddGoalHandler} onAddGoal={addGoalHandler}  /> }
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} 
            renderItem={(itemData) => {
                return (
                  <GoalItem 
                  text={itemData.item.text}
                  id={itemData.item.id}
                   onDeleteItem={deleteGoalHandler} />
                );
              }
            }
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
            />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },

});
