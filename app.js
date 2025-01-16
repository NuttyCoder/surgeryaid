import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

// Screens
import JournalScreen from './screens/JournalScreen';
import MedicationScreen from './screens/MedicationScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import MealPlanScreen from './screens/MealPlanScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Journal">
          <Stack.Screen name="Journal" component={JournalScreen} />
          <Stack.Screen name="Medication" component={MedicationScreen} />
          <Stack.Screen name="Exercise" component={ExerciseScreen} />
          <Stack.Screen name="Meal Plan" component={MealPlanScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
