import { NavigationContainer } from '@react-navigation/native'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTasks } from '../store/actions/tasks.actions'

import TabsNavigator from './tabs'

const AppNavigator = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTasks())
    // dispatch(fetchReminders())
  }, [])

  return (
    <NavigationContainer>
      <TabsNavigator/>
    </NavigationContainer>
  )
}

export default AppNavigator
