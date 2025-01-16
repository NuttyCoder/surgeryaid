import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const JournalScreen = ({ navigation }) => {
  const [entry, setEntry] = useState('');

  const saveJournalEntry = () => {
    // In a real app, you'd save this data to a database or local storage
    console.log('Journal Entry Saved:', entry);
    setEntry(''); // Reset input after saving
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recovery Journal</Text>
      <TextInput
        style={styles.textInput}
        placeholder="How are you feeling today?"
        value={entry}
        onChangeText={setEntry}
        multiline
      />
      <Button title="Save Entry" onPress={saveJournalEntry} />
      <Button
        title="Go to Medication"
        onPress={() => navigation.navigate('Medication')}
      />
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
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
});

export default JournalScreen;
