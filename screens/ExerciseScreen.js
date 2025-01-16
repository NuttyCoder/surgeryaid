import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const ExerciseScreen = () => {
  const [exercise, setExercise] = useState('');
  
  const saveExerciseLog = () => {
    console.log('Exercise completed:', exercise);
    setExercise(''); // Reset after saving
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exercise Log</Text>
      <TextInput
        style={styles.textInput}
        placeholder="What exercise did you do today?"
        value={exercise}
        onChangeText={setExercise}
      />
      <Button title="Save Exercise" onPress={saveExerciseLog} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
});

export default ExerciseScreen;
