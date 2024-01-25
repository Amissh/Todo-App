import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TodoScreen from '../screens/todoScreen/index'
import TaskDetailsScreen from '../screens/TaskDetailsScreen';

const Stack = createStackNavigator();

const TaskStack = () => {
  return (
    <Stack.Navigator initialRouteName="Tasks">
      <Stack.Screen name="TaskStack" component={TodoScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="TaskDetailsScreen" component={TaskDetailsScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default TaskStack;