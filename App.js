import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, Alert, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === '') {
      Alert.alert('Your response is empty', 'Please enter your task');
      return;
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: todo },
    ]);
    setTodo('');
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };


  return (
    <View style={styles.container}>
      <View style={styles.wrapTitle}>
        <Text style={styles.sectionTitle}>Your Tasks</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={todo}
        onChangeText={setTodo}
      />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>{item.text}</Text>
            <TouchableOpacity style={styles.DoneBTN} onPress={() => removeTodo(item.id)} >
              <View>
                <Text style={styles.DoneBTNTxt}>Done</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addWrapper} onPress={addTodo}>
        <View>
          <Text style={styles.plus}>+</Text>
        </View>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  DoneBTNTxt: {
    color: 'white',
  },
  DoneBTN: {
    backgroundColor: 'black',
    height: 40,
    width: 80,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  plus: {
    fontSize: 25,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    width: 350,
    height: 70,
    borderColor: 'gray',
    backgroundColor: '#d4d4d4',

    borderRadius: 29,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  AddTDButton: {
    borderRadius: 60,
    paddingBottom: 45,
    fontSize: 35,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#cbd1d1',
    borderColor: 'gray',
    borderRadius: 30,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  wrapTitle: {
    paddingTop: 80,
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  addWrapper: {
    height: 70,
    width: 70,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 55,
    backgroundColor: '#b4d1d1',
  },


});

export default App;